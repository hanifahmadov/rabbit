/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";
import { io } from "socket.io-client";
import apiUrl from "../../apis/apiUrl";
import chalk from "chalk";

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
	const [socketConnection, setSocketConnection] = useRecoilState(
		socketConnectionDefaults
	);

	const [msg, setMsg] = useState("");
	const [res, setRes] = useState([]);
	const [msgSubmitted, setMsgSubmitted] = useState(false);
	const [createRoomSubmitted, setCreateRoomSubmitted] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const [rooms, setRooms] = useRecoilState(roomsDefault);
	const [currentRoom, setCurrentRoom] = useRecoilState(currentRoomDefault);
	const resetRooms = useResetRecoilState(roomsDefault);
	const [createRoom, setCreateRoom] = useState("");

	let socketRef = useRef();

	useEffect(() => {
		/**
		 * 	if user connection or listeners double tripple
		 * 	then try to add cleaner functions
		 * 	or socketConnection, setSocketConnection(true) states
		 */

		if (!socketConnection) {
			// // console.log("🚀 ~ file: Home.js:63 ~ Connectiong to server...");
			socketRef.current = io(apiUrl, {
				// Disable autoConnect to have more control over headers
				reconnection: false,
				extraHeaders: {
					Authorization: `Bearer ${user.accessToken}`,
				},
			});

			socketRef.current.on("connect_error", (err) => {
				console.log(chalk.red("connect_error"));
				console.log(err);

				console.log("resetRooms called");
				resetRooms();
				setSocketConnection(false);
			});

			socketRef.current.on("connect_failed", (err) => {
				console.log(chalk.red("connect_failed"));
				console.log(err);

				console.log("resetRooms called");
				resetRooms();
				setSocketConnection(false);
			});

			socketRef.current.on("disconnect", (err) => {
				console.log(chalk.red("disconnect"));
				console.log(err);

				console.log("resetRooms called");
				resetRooms();
				setSocketConnection(false);
			});

			// ON JUST CONNECTED
			socketRef.current.on("just_connected", (response) => {
				console.log(
				"socketRef.current.on.just_connected ~ response:",
				response
				);

				let { justConnected, room } = response;

				/**
				 *  when user connect, the server will create a general room
				 * 	auto if its not exist, then will send the whole rooms
				 * 	on the client side, rooms stats will get whole replacement
				 * 	like romms = response.rooms
				 */
				let updated = produce(rooms, (draft) => {
					draft = room;
					return draft;
				});

				setRooms(updated);
				setCurrentRoom(updated.find((room) => room.owner === null ));

				// // console.log(
				// // "Home.js:87 ~ socketRef.current.on ~ justConnected:",
				// // justConnected
				// // );
			});

			// ON JUST DISCONNECTED
			socketRef.current.on("just_disconnected", (response) => {
				console.log(
				" Home.js:95 ~ socketRef.current.on.just_disconnected ~ response:",
				response
				);
			});

			window.socket = socketRef.current;
			// setSocketConnection(true);
		}

		// CLEREANCE
		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			// // console.log(
			// // "🚀 ~ file: Home.js:97 ~ useEffect return ~ clear functions:"
			// // );
			console.log("clear functions");
			socketRef.current.removeAllListeners("just_connected");
			socketRef.current.removeAllListeners("just_disconnected");
		};
	}, []);

	useEffect(() => {
		// ON NEW MESSAGE
		socketRef.current.on("new_message", (response) => {
			// // console.log(
			// // "🚀 ~ file: Home.js:101 ~ socketRef.current.on ~ response:",
			// // response
			// // );
			let newRes = produce(res, (draft) => {
				/**
				 * 	check produce without not returning draft
				 * 	cause on the doc, it doesnt return draft
				 * 	when updating, but direct draft = response
				 * 	is wierd and train this
				 */
				draft = response;
				// // console.log("🚀 ~ file: Home.js:110 ~ newRes ~ draft:", draft);

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
	}, [msgSubmitted]);

	useEffect(() => {
		// ON NEW ROOM
		socketRef.current.on("new_room", (response) => {
			// // console.log(
			// // "🚀 ~ file: Home.js:101 ~ socketRef.current.on.new_room ~ response:",
			// // response
			// // );

			const { room } = response;

			const updated = produce(rooms, (draft) => {
				// check if that room exist in case
				let check = draft.some((val) => val._id == room._id);

				if (!check) {
					draft.push(room);
					return draft;
				} else {
					return draft;
				}
			});

			setRooms(updated);

			// console.log("newRes before setRes", newRes)
		});

		// cleaning function
		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			socketRef.current.removeAllListeners("new_room");
		};
	}, [createRoomSubmitted]);

	// HANDLE MESSAGE FORM
	const handleMessageForm = (e) => {
		e.preventDefault();

		socketRef.current.emit("send_message", {
			roodId: currentRoom._id,
			msg,
		});
		setMsgSubmitted(!msgSubmitted);
	};

	// HANDLE CREATE ROOM FORM
	const handleCreateRoomForm = (e) => {
		e.preventDefault();

		socketRef.current.emit("create_room", {
			roomName: createRoom,
			roomOwner: user._id,
		});

		setCreateRoom("");
		setCreateRoomSubmitted(!createRoomSubmitted);
	};

	return (
		<HomeContainer id='home'>
			<LeftSection>
				<RoomsSection>
					<div className='header'>
						<h5>Rooms</h5>
					</div>

					<div className='content'>
						{console.log("rooms", rooms)}
						{rooms.map((room, ind) => (


							<div
								className={
									"room_container " +
									(room.name === currentRoom.name
										? "active"
										: "")
								}
								key={ind}
								onClick={() => setCurrentRoom(room)}
							>
								<span>room: {room.name} </span>
								<br />
								<span>owner: {room.owner == null ? <>system</> : room.owner.email}</span>
							</div>
						))}
					</div>

					<form
						className='create_room'
						onSubmit={handleCreateRoomForm}
					>
						<input
							type='text'
							value={createRoom}
							placeholder='New Room...'
							onChange={(e) => setCreateRoom(e.target.value)}
						/>
						<button disabled={!(createRoom.length >= 2)}>
							create
						</button>
					</form>
				</RoomsSection>
				{/* <UsersSection>
					<div className='header'>
						<h5>Users</h5>
					</div>

					<div className='content'></div>
				</UsersSection> */}
			</LeftSection>

			<RightSection>
				<MessagesSection>
					{res.map((val, i) => (
						<li key={i}>{val}</li>
					))}
				</MessagesSection>

				<MessagesForm onSubmit={handleMessageForm} id='form'>
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
