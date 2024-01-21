/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilValue } from "recoil";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

/* STATE & STYLED & APIS */
import { BoardSection } from "../styled/board.styled";
import { curRoomState } from "../../homeStore/states";
import { userState } from "../../../auth/authStore/states";

/* SUBS */
import { Message } from "./Message";



export const Board = ({}) => {
	const curRoom = useRecoilValue(curRoomState);
	const user = useRecoilValue(userState);

	console.log("currRoom inside Board", curRoom);

	return (
		<BoardSection>
			<section className="messages">
				{curRoom && curRoom.messages.map((i, j) => (
					<Message key={j} message={i} />
				))}
			</section>
		</BoardSection>
	);
};

/* 

			<div className='watermark'>
				ROOM <br /> {currentRoom?.name?.toUpperCase()}
			</div>
			<div className='autoscrollRef' ref={autoscrollRef} />


*/
