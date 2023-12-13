/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// styled
import {
	MessagesForm,
	HomeContainer,
	UsersSection,
	RoomsSection,
	RightSection,
	LeftSection,
	MessagesSection,
	Header,
	Content,
} from "./Home.styled";

// states
import {
	roomsDefault,
	socketConnectionDefaults,
	currentRoomDefault,
} from "../shared/store/states";

import { socketConnect } from "../../apis/socketConnect";
import { userState } from "../auth/authStore/states";

export const Home = () => {
	// looks like no need sofar
	const [socketConnection, setSocketConnection] = useRecoilState(
		socketConnectionDefaults
	);
	const [msg, setMsg] = useState("");
	const [res, setRes] = useState([]);
	const [submitted, setSubmitted] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const [rooms, setRooms] = useRecoilState(roomsDefault);
	const [currentRoom, setCurrentRoom] = useRecoilState(currentRoomDefault);

	let socketRef = useRef();

	useEffect(() => {
		/**
		 * 	if user connection or listeners double tripple
		 * 	then try to add cleaner functions
		 * 	or socketConnection, setSocketConnection(true) states
		 */
		if (!socketConnection) {
			console.log("connect just run");

			socketRef.current = socketConnect(user);

			socketRef.current.on("just_connected", (response) => {
				console.log(response);
			});

			socketRef.current.on("just_disconnected", (response) => {
				console.log(response);
			});

			window.socket = socketRef.current;
			setSocketConnection(true);
		}

		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			socketRef.current.removeAllListeners("new_connection");
			socketRef.current.removeAllListeners("new_disconnection");
		};
	}, []);

	useEffect(() => {
		socketRef.current.on("new_message", (response) => {
			let newRes = produce(res, (draft) => {
				console.log(response);
				/**
				 * 	check produce without not returning draft
				 * 	cause on the doc, it doesnt return draft
				 * 	when updating, but direct draft = response
				 * 	is wierd and train this
				 */
				draft = response;

				return draft;
			});

			// console.log("newRes before setRes", newRes)

			setRes(newRes);
			setMsg("");
		});

		// cleaning function
		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			socketRef.current.removeAllListeners("new_message");
		};
	}, [submitted]);

	const handleSubmit = (e) => {
		e.preventDefault();

		socketRef.current.emit("send_message", {
			roodId: currentRoom.id,
			msg,
		});
		setSubmitted(!submitted);
	};

	return (
		<HomeContainer id='home'>
			{console.log("currentRoom", rooms)}
			{/* {console.log("response ready to map", res)} */}
			<LeftSection>
				<RoomsSection>
					<div className='header'>
						<h5>Rooms</h5>
					</div>

					<div className='content'>
						{rooms.map((room) => (
							<div className='room_container' key={room.id}>
								{room.name}
							</div>
						))}
					</div>
				</RoomsSection>
				<UsersSection>
					<div className='header'>
						<h5>Users</h5>
					</div>

					<div className='content'></div>
				</UsersSection>
			</LeftSection>

			<RightSection>
				{console.log(res)}
				<MessagesSection>
					{res.map((val, i) => (
						<li key={i}>{val}</li>
					))}
				</MessagesSection>

				<MessagesForm onSubmit={handleSubmit} id='form'>
					<input
						type='text'
						value={msg}
						placeholder='Type something here...'
						onChange={(e) => setMsg(e.target.value)}
					/>
					<button type='submit'>send</button>
				</MessagesForm>
			</RightSection>
		</HomeContainer>
	);
};
