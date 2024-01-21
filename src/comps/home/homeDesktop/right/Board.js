/* eslint-disable */
/* NPM */
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

/* STATE & STYLED & APIS */
import { BoardForm, BoardSection } from "../styled/board.styled";
import { curRoomState, displayState } from "../../homeStore/states";

/* SUBS */
import { Message } from "./Message";

export const Board = ({}) => {
	const curRoom = useRecoilValue(curRoomState);
	const display = useRecoilValue(displayState)
	const [text, setText] = useState("");

	console.log("currRoom inside Board", curRoom);

	return (
		<BoardSection display={false}>
			<section className='messages'>
				{curRoom &&
					curRoom.messages.map((msg, index) => (
						<Message key={index} message={msg} />
					))}
			</section>
			<BoardForm text={text}>
				<input
					type='text'
					value={text}
					placeholder={`You are typing into ~ ${curRoom?.name?.toUpperCase()}`}
					onChange={(e) => setText(e.target.value)}
					// disabled={roomAccessStrict}
				/>
				<button
					type='submit'
					// disabled={roomAccessStrict}
				>
					<span>➤</span>
				</button>
			</BoardForm>
		</BoardSection>
	);
};

/* 

			<div className='watermark'>
				ROOM <br /> {currentRoom?.name?.toUpperCase()}
			</div>
			<div className='autoscrollRef' ref={autoscrollRef} />


*/
