/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { produce } from "immer";
import { io } from "socket.io-client";
import apiUrl from "../../apis/apiUrl.js";
import chalk from "chalk";
import { motion } from "framer-motion";

import info from "../shared/logos/info1.png";

// styled
import {
	MessagesForm,
	HomeContainer,
	RightSection,
	LeftSection,
	MessagesSection,
} from "./Styled.js";

// states
import {
	roomsDefault,
	socketConnectionDefaults,
	currentRoomDefault,
	allUsersDefault,
	activeUsersDefault,
} from "../shared/store/states.js";

import { userState } from "../auth/authStore/states.js";
import { Room } from "../home/homeDesktop/Room.js";
import { RoomDetails } from "./RoomDetails.js";
import { Account } from "../home/account/Account.js";
import { CreateRoom } from "./CreateRoom.js";
import { Messages } from "./Messages.js";
import { JoinRoom } from "./JoinRoom.js";
import {
	roomSettingDesktopVariants,
	roomSettingMobileVariants,
} from "./helpers/variants.js";

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
	const [backdrop, setBackdrop] = useState(true);

	let socketRef = useRef();
	let autoscrollRef = useRef();

	/** SET UP BASICS ON HE CONNECTION
	 *  informs all when a new user joins
	 *  creates the default room if no room available
	 *  handle logouts and errors
	 *  and etc. mentioned below
	 */
	useEffect(() => {
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

				console.log("128: Home.js roomsss", rooms);

				let updatedMessages = produce(messages, (draft) => {
					for (let room of rooms) {
						for (let msg of room.messages) {
							draft.push(msg);
						}
					}
				});

				setRooms(rooms);
				setMessages(updatedMessages);
				setCurrentRoom(rooms.find((room) => room.owner === null));
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

				autoscrollRef?.current?.scrollIntoView({ behavior: "smooth" });
			});

			window.socket = socketRef.current;
			setSocketConnection(true);
		}
	}, []);

	/** VALID USER ACCESS GRANTED
	 *  users cant read/write to a room  by default
	 *  must a member of the room
	 *  by getting authorized from the room owner
	 */

	useEffect(() => {
		let valid = currentRoom?.users?.some((u) => u._id === user._id);

		if (!valid) {
			setRoomAccessStrict(true);
		} else {
			setRoomAccessStrict(false);
		}
	}, [currentRoom]);

	/** USER AUTHORIZATION CHECKER
	 *  users cant read/write to a room  by default
	 *  must a member of the room
	 *  by getting authorized from the room owner
	 */
	useEffect(() => {
		const valid = currentRoom?.users?.some((u) => u._id == user._id);
		// console.log('196: Home.js rooms', rooms)
		const cr = rooms.find((room) => room._id === currentRoom._id);

		setBackdrop(valid);
		setCurrentRoom(cr);
	}, [rooms, currentRoom]);

	// HANDLE MESSAGE FORM
	const handleMessageForm = (e) => {
		e.preventDefault();

		socketRef.current.emit("send_message", {
			roomName: currentRoom.name,
			roomId: currentRoom._id,
			msg,
		});

		setMsgSubmitted(!msgSubmitted);
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

	const mapMessages = (messages) => {
		if (messages.length && currentRoom) {
			return messages.map((i, j) => {
				if (i.room == currentRoom?._id) {
					return <Messages key={j} message={i} user={user} />;
				}
			});
		}
	};

	return (
		<HomeContainer id='home'>
			{/* {console.log('300: home.js rooms', rooms)}
			{console.log('301: home.js current room', currentRoom)}
			{console.log('302: home.js backdrop', backdrop)} */}
			<LeftSection>
				<section className='side_navbar'>
					<section className='section_rooms'>Rooms</section>
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

				<motion.section
					className='currentRoomDetailsSection'
					variants={
						display
							? roomSettingMobileVariants
							: roomSettingDesktopVariants
					}
					initial='initial'
					animate={display ? "animate" : "exit"}
				>
					{displayRoomInfo && currentRoom.name && (
						<RoomDetails
							currentRoom={currentRoom}
							setDisplay={setDisplay}
							set
						/>
					)}

					{displayCreateRoom && (
						<CreateRoom user={user} setDisplay={setDisplay} />
					)}
				</motion.section>
			</LeftSection>

			<RightSection $display={display}>
				{/* {console.log("325 Home.js: current room", currentRoom)} */}
				<MessagesSection
					$backdrop={backdrop}
					$currentRoomName={currentRoom?.name?.toUpperCase()}
				>
					<JoinRoom
						rooms={rooms}
						setRooms={setRooms}
						currentRoom={currentRoom}
						setCurrentRoom={setCurrentRoom}
						user={user}
						backdrop={backdrop}
					/>

					{mapMessages(messages)}

					<div className='watermark'>
						ROOM <br /> {currentRoom?.name?.toUpperCase()}
					</div>
					<div className='autoscrollRef' ref={autoscrollRef} />
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
