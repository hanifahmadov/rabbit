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
	activeUsersDefault,
} from "../shared/store/states";

import { socketConnect } from "../../apis/socketConnect";
import { userState } from "../auth/authStore/states";
import { Room } from "./Room.js";
import { RoomDetails } from "./RoomDetails.js";
import { Account } from "../shared/account/Account.js";
import { CreateRoom } from "./CreateRoom.js";
import { Messages } from "./Messages.js";

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

	const [allUsers, setAllUsers] = useRecoilState(allUsersDefault);
	const [activeUsers, setActiveUsers] = useRecoilState(activeUsersDefault);

	const [display, setDisplay] = useState(false);
	const [displayRoomInfo, setDisplayRoomInfo] = useState(false);
	const [displayCreateRoom, setDisplayCreateRoom] = useState(false);

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
			});

			socketRef.current.on("connect_failed", (err) => {
				console.log(chalk.red("connect_failed"));
				console.log(err);

				console.log("resetRooms called");
				resetRooms();
			});

			socketRef.current.on("disconnect", (res) => {
				console.log(chalk.red("84: Home.js ~ disconnect ~ res: ", res));

				console.log("resetRooms called");
				resetRooms();
			});

			socketRef.current.on("custom_error", (err) => {
				console.log(chalk.red("custom_error"));
				console.log(err);
			});

			// SOCKET ON JUST CONNECTED
			socketRef.current.on("just_connected", (response) => {
				let { justConnected, rooms } = response;

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

				setMessages(updatedMessages);
				setRooms(updated);
				setCurrentRoom(updated.find((room) => room.owner === null));
			});

			// SOCKET ON USERS ON CONNECTION
			socketRef.current.on("usersOnConnection", (res) => {
				console.log("usersOnConnection: ", res);

				setAllUsers(res.allUsers);
				setActiveUsers(res.activeUsers);
			});

			// SOCKET ON USERS ON  DISCONNECTED
			socketRef.current.on("usersOnDisconnection", (res) => {
				console.log("usersOnDisconnection: ", res);

				setAllUsers(res.allUsers);
				setActiveUsers(res.activeUsers);
			});

			// SOCKET ON NEW ROOM
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

			// SOCKET ON NEW MESSAGE
			socketRef.current.on("new_message", (response) => {
				// console.log("new_message, response: ", response);

				setMessages((prevMessages) => [...prevMessages, response]);
				setMsg("");

				emptyDivRef?.current?.scrollIntoView({ behavior: "smooth" });
			});

			window.socket = socketRef.current;
			setSocketConnection(true);
		}
	}, []);

	// useEffect(() => {
	// 	// ON NEW MESSAGE

	// 	// cleaning function
	// 	return () => {
	// 		// before the component is destroyed
	// 		// unbind all event handlers used in this component
	// 		socketRef.current.removeAllListeners("new_message");
	// 	};
	// }, [msgSubmitted]);

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

	const handleRoomDetailsClick = () => {
		if (!display) {
			setDisplay(true);
			setDisplayRoomInfo(true);
			setDisplayCreateRoom(false);
		} else {
			if (displayRoomInfo) {
				setDisplay(false);
			} else {
				setDisplayRoomInfo(true);
				setDisplayCreateRoom(false);
			}
		}
	};

	const handleCreateRoomClick = () => {
		if (!display) {
			setDisplay(true);
			setDisplayCreateRoom(true);
			setDisplayRoomInfo(false);
		} else {
			if (displayCreateRoom) {
				setDisplay(false);
			} else {
				setDisplayRoomInfo(false);
				setDisplayCreateRoom(true);
			}
		}
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
			width: "0rem",
		},

		animate: {
			opacity: 1,
			width: "15rem",
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
							onClick={handleRoomDetailsClick}
						>
							<span>
								<img src={info} />
							</span>
						</div>
						<div
							className='create_new_room'
							onClick={handleCreateRoomClick}
						>
							<span>+</span>
						</div>
						<div className='userAccount'>
							<Account />
						</div>
					</div>
				</section>

				{/* <CreateRoom  user={user}/> */}

				<AnimatePresence>
					<motion.section
						className='currentRoomDetailsSection'
						variants={roomSettingVariants}
						initial='initial'
						animate={display ? "animate" : "exit"}
					>
						{displayRoomInfo && currentRoom.name && (
							<RoomDetails currentRoom={currentRoom} setDisplay={setDisplay} set />
						)}

						{displayCreateRoom &&  (
							<CreateRoom user={user} setDisplay={setDisplay}/>
						)}
					</motion.section>
				</AnimatePresence>
			</LeftSection>

			<RightSection>
				<MessagesSection>
					{messages.map((i, j) => {
						if (i.room === currentRoom._id) {
							return (
								<Messages key={j} message={i} user={user}/>
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


