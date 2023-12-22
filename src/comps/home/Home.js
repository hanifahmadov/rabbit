/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { produce } from "immer";
import { io } from "socket.io-client";
import apiUrl from "../../apis/apiUrl";
import chalk from "chalk";
import { motion, AnimatePresence } from "framer-motion";

import { formatDistanceToNow } from "date-fns";
import info from "../shared/logos/info1.png";

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
} from "./Styled.js";

// states
import {
	roomsDefault,
	socketConnectionDefaults,
	currentRoomDefault,
	allUsersDefault,
} from "../shared/store/states";

import { socketConnect } from "../../apis/socketConnect";
import { userState } from "../auth/authStore/states";
import { Room } from "./Room.js";
import { RoomDetails } from "./RoomDetails.js";
import { Account } from "../shared/account/Account.js";

export const Home = () => {
	const [socketConnection, setSocketConnection] = useRecoilState(
		socketConnectionDefaults
	);

	const [msg, setMsg] = useState("");
	const [messages, setMessages] = useState([]);
	const [msgSubmitted, setMsgSubmitted] = useState(false);
	const [createRoomSubmitted, setCreateRoomSubmitted] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const [rooms, setRooms] = useRecoilState(roomsDefault);
	const [currentRoom, setCurrentRoom] = useRecoilState(currentRoomDefault);
	const resetRooms = useResetRecoilState(roomsDefault);
	const [createRoom, setCreateRoom] = useState("");
	const [roomAccessStrict, setRoomAccessStrict] = useState(false);
	// CDR refers to currentRoomDetails section which Home.js 322
	const [toggleCRDSection, setToggleCRDSection] = useState(false);
	const [allUsers, setAllUsers] = useRecoilState(allUsersDefault);

	let socketRef = useRef();
	let emptyDivRef = useRef();

	useEffect(() => {
		/**
		 * 	if user connection or listeners double tripple
		 * 	then try to add cleaner functions
		 * 	or socketConnection, setSocketConnection(true) states
		 */

		if (!socketConnection) {
			socketRef.current = io(apiUrl, {
				// Disable autoConnect to have more control over headers
				reconnection: true,
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

			// socketRef.current.on("disconnect", (res) => {
			// 	console.log(chalk.red("84: Home.js ~ disconnect ~ res: ", res));

			// 	console.log("resetRooms called");
			// 	resetRooms();
			// 	setSocketConnection(false);
			// });

			socketRef.current.on("custom_error", (err) => {
				console.log(chalk.red("custom_error"));
				console.log(err);

				// console.log("resetRooms called");
				// resetRooms();
				// setSocketConnection(false);
			});

			// ON JUST CONNECTED
			socketRef.current.on("just_connected", (response) => {
				let {
					justConnected,
					rooms,
					allUsers: registeredUsers,
				} = response;

				console.log("just connected: ", justConnected.email);

				/**
				 * 	# Setting up rooms
				 *  when user connect, the server will create a general room
				 * 	auto if its not exist, then will send the whole rooms
				 * 	on the client side, rooms stats will get whole replacement
				 * 	like romms = response.rooms
				 */
				let updated = produce(rooms, (draft) => {
					draft = rooms;
					return draft;
				});

				/**
				 * 	# Setting up messages
				 * 	when user connects, it get all rooms
				 * 	with fully populated owner, users, messages
				 * 	retrieve messages and make it set Msg for mapping
				 *
				 */

				let updatedMessages = produce(messages, (draft) => {
					for (let room of rooms) {
						for (let msg of room.messages) {
							draft.push(msg);
						}
					}
				});

				// let updatedAllUsers = produce(allUsers, (draft) => {
				// 	registeredUsers.forEach((u) => {
				// 		draft.push(u);
				// 	});
				// });

				// console.log(
				// 	"updatedMessages updatedMessages updatedMessages",
				// 	updatedMessages
				// );

				setMessages(updatedMessages);
				setRooms(updated);
				setCurrentRoom(updated.find((room) => room.owner === null));

			});

			// ON JUST DISCONNECTED
			socketRef.current.on("just_disconnected", (res) => {
				console.log("socketRef.on.just_disconnected: ", res);

				const { users } = res;

				console.log("all allUsersss", users);
		

				let updatedOnlineUser = produce(allUsers, draft => {
					draft = users
				})

				setAllUsers(users)
			});

			window.socket = socketRef.current;
			setSocketConnection(true);
		}

		// CLEREANCE
		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			// console.log("clear functions");
			// socketRef.current.removeAllListeners("just_connected");
			// socketRef.current.removeAllListeners("just_disconnected");
		};
	}, []);

	useEffect(() => {
		// ON NEW MESSAGE
		socketRef.current.on("new_message", (response) => {
			// console.log("new_message, response: ", response);
			// console.log("messagessss", messages);
			// let newMessages = produce(messages, (draft) => {
			// 	draft.push(response);
			// });

			// console.log(newMessages)

			// console.log("newMessages before setRes", newMessages);

			// console.log("newMessagesssss", newMessages);

			// setMessages(newMessages);

			setMessages((prevMessages) => [...prevMessages, response]);
			setMsg("");

			emptyDivRef?.current?.scrollIntoView({ behavior: "smooth" });
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
		// socketRef.current.on("new_room", (response) => {
		// 	console.log("new_room ~ response: ", response);

		// 	const { room } = response;

		// 	const updated = produce(rooms, (draft) => {
		// 		// check if that room exist in case
		// 		let check = draft.some((val) => val._id == room._id);

		// 		if (!check) {
		// 			draft.push(room);
		// 			return draft;
		// 		} else {
		// 			return draft;
		// 		}
		// 	});

		// 	setRooms(updated);
		// });

		socketRef.current.on("new_room", (response) => {
			console.log("new_room ~ response: ", response);
			const { room } = response;
			setRooms((prevRooms) => {
				// Check if that room exists
				if (prevRooms.some((val) => val._id === room._id)) {
					return prevRooms;
				}
				// Room doesn't exist, add it to the array
				return [...prevRooms, room];
			});
		});

		// cleaning function
		return () => {
			// console.log("newroom = cleaning function");

			// before the component is destroyed
			// unbind all event handlers used in this component

			socketRef.current.removeAllListeners("new_room");
		};
	}, [createRoomSubmitted]);

	// HANDLE MESSAGE FORM
	const handleMessageForm = (e) => {
		e.preventDefault();

		// console.log(currentRoom);

		socketRef.current.emit("send_message", {
			roomName: currentRoom.name,
			roomId: currentRoom._id,
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

	useEffect(() => {
		let valid = currentRoom?.users?.some((u) => u._id === user._id);

		if (!valid) {
			setRoomAccessStrict(true);
		} else {
			setRoomAccessStrict(false);
		}
	}, [currentRoom]);

	const roomSettingVariants = {
		initial: {
			opacity: 0,
			width: "1rem",
		},

		animate: {
			opacity: 1,
			width: "14rem",
			transition: {
				duration: 0.5,
				opacity: {
					delay: 0.5,
				},
			},
		},

		exit: {
			opacity: 0,
			width: "0rem",
			transition: {
				width: {
					delay: 0.1,
					duration: 0.5,
				},
				opacity: {
					duration: 0.3,
				},
			},
		},
	};

	return (
		<HomeContainer id='home'>
			{/* {console.log(toggleCRDSection)} */}
			<LeftSection>
				<section className='side_navbar'>
					<div className='rooms'>
						{rooms.map((room, index) => (
							<Room
								key={index}
								room={room}
								currentRoom={currentRoom}
								setCurrentRoom={setCurrentRoom}
							/>
						))}
					</div>

					<div className='createNewRoom_and_userAccount'>
						<div
							className='room_details'
							onClick={() =>
								setToggleCRDSection(!toggleCRDSection)
							}
						>
							<span>
								<img src={info} />
							</span>
						</div>
						<div className='create_new_room'>
							<span>+</span>
						</div>
						<div className='userAccount'>
							<Account />
						</div>
					</div>
				</section>

				<AnimatePresence>
					<motion.section
						className='currentRoomDetailsSection'
						variants={roomSettingVariants}
						initial='initial'
						animate={toggleCRDSection ? "animate" : "exit"}
					>
						{currentRoom.name && (
							<RoomDetails currentRoom={currentRoom} />
						)}
					</motion.section>
				</AnimatePresence>
			</LeftSection>

			<RightSection>
				<MessagesSection>
					{messages.map((val, i) => {
						if (val.room === currentRoom._id) {
							return (
								<div
									key={i}
									style={{
										margin: "10px",
										border: "1px solid white",
										color: "white",
										padding: "10px 20px",
									}}
									ref={(e) => (emptyDivRef.current = e)}
								>
									typed: {val.text}
									<br />
									owner: {val.owner.email}
								</div>
							);
						}
					})}
					<div className='spacer' />
				</MessagesSection>

				<MessagesForm onSubmit={handleMessageForm}>
					<input
						type='text'
						value={msg}
						placeholder={`You are typing into ~ ${currentRoom?.name?.toUpperCase()}`}
						onChange={(e) => setMsg(e.target.value)}
						disabled={roomAccessStrict}
					/>
					<button type='submit' disabled={roomAccessStrict}>
						<span>➤</span>
					</button>
				</MessagesForm>
			</RightSection>
		</HomeContainer>
	);
};

{
	/* <form
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
					</form> */
}
