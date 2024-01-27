/* eslint-disable */
/* NPM */
import React from "react";

/* STYLED  */
import { ChatsSection } from "../styled/chats.styled";

export const Chats = () => {
	const handleCreateRoomClick = () => {
		
	}
	return (
		<ChatsSection>
			<section className='title'>
				<span>Chats</span>
			</section>

			<section className='createRoom' onClick={handleCreateRoomClick}>
				<span className='plus'>+</span>
			</section>
		</ChatsSection>
	);
};
