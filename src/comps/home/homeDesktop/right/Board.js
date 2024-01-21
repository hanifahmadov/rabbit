/* eslint-disable */
/* NPM */
import React, { useRef, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

/* STATE & STYLED & APIS */
import { BoardForm, BoardSection } from "../styled/board.styled";
import { curRoomState, roomsState } from "../../homeStore/states";

/* SUBS */
import { Message } from "./Message";

export const Board = ({}) => {
	const [curRoom, setCurRoom] = useRecoilState(curRoomState);
	const [text, setText] = useState("");
	const lastElementRef = useRef();



	/* HANDLE BOARD FORM */
	const handleBoardForm = (e) => {
		e.preventDefault();
		window.lastElement = lastElementRef.current;

		window.socket.emit("send_message", {
			roomName: curRoom.name,
			roomId: curRoom._id,
			text,
		});

		setText("");
	};

	return (
		<BoardSection>
			<section className='messages'>
				{curRoom &&
					curRoom.messages.map((msg, index) => (
						<Message key={index} message={msg} />
					))}
				<span className='lastElement' ref={lastElementRef} />
			</section>
			<BoardForm text={text} onSubmit={handleBoardForm}>
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
