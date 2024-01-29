/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilState } from "recoil";

/* STYLED  */
import { ChatsSection } from "../styled/chats.styled";
import { createNewRoomState } from "../../store_m/states";


export const Chats = () => {
	const [ createNewRoom, setCreateNewRoom ] = useRecoilState(createNewRoomState)
	const handleCreateRoomClick = () => {
		setCreateNewRoom(!createNewRoom)
	}
	return (
		<ChatsSection>
			<section className='title'>
				<span>Chats</span>
			</section>

			<section className='createRoom' onClick={handleCreateRoomClick}>
				<span className='plus'>{createNewRoom ? '-' : '+'}</span>
			</section>
		</ChatsSection>
	);
};
