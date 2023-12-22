/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// states
import { socketConnectionDefaults } from "../shared/store/states";

// styled
import { CreateRoomContainer } from "./Styled";

export const CreateRoom = ({ user }) => {

    const inputRef = useRef()


	const handleCreateRoomSubmit = (e) => {
		e.preventDefault();

        window.socket.emit('create_room', { roomName: inputRef.current.value, roomOwner: user._id })
		inputRef.current.value = "";
	};
	return (
		<CreateRoomContainer id='createRoomContainer'>
			{console.log("CreateRoom runs")}
			<section className='header'>
				<h5>Create New Room</h5>
			</section>

			<form onSubmit={handleCreateRoomSubmit}>
				<input
					type='text'
					name='newroomInput'
					id='newroomInput'
					ref={inputRef}
				/>
				<button type='submit'>Create</button>
			</form>
		</CreateRoomContainer>
	);
};
