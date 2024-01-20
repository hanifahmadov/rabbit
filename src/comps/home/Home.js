/* eslint-disable */
// NPM Packages
import { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { produce } from "immer";
import { io } from "socket.io-client";
import chalk from "chalk";

// STATES & STYLES
import { deviceState } from "../shared/store/states";
import {
	socketConState,
	curRoomState,
	roomsState,
	usersState,
	activeUsersState,
} from "./homeStore/states";
import { userState } from "../auth/authStore/states";

// LOCALS
import apiUrl from "../../apis/apiUrl";
import info from "../shared/logos/info1.png";
import { reset } from "./homeStore/helpers";
import { HomeDesktop } from "./homeDesktop/HomeDesktop";

export const Home = () => {
	// default states
	const device = useRecoilValue(deviceState);
	const [socketCon, setSocketCon] = useRecoilState(socketConState);
	const [curRoom, setCurRoom] = useRecoilState(curRoomState);
	const [user, setUser] = useRecoilState(userState);
	const [rooms, setRooms] = useRecoilState(roomsState);
	const [users, setUsers] = useRecoilState(usersState);
	const [activeUsers, setActiveUsers] = useRecoilState(activeUsersState);

	// resets
	const resetall = {
		resetUser: useResetRecoilState(userState),
		resetRooms: useResetRecoilState(roomsState),
		resetCurRoom: useResetRecoilState(curRoomState),
		resetUsers: useResetRecoilState(usersState),
		resetActiveUsers: useResetRecoilState(activeUsersState),
		resetSocketCon: useResetRecoilState(socketConState),
	};

	// current states
	const [text, setText] = useState("");
	const [roomMessages, setRoomMessages] = useState([]);
	const [createRoom, setCreateRoom] = useState("");
	const [textSubmitted, setTextSubmitted] = useState(false);
	const [createRoomSubmitted, setCreateRoomSubmitted] = useState(false);
	const [roomAccessStrict, setRoomAccessStrict] = useState(false);	
	const [backdrop, setBackdrop] = useState(true);



	// refs
	let autoscrollRef = useRef();

	/** SET UP BASICS ON HE CONNECTION
	 *  informs all when a new user joins
	 *  creates the default room if no room available
	 *  handle logouts and errors
	 *  and etc. mentioned below
	 */
	useEffect(() => {
		if (!socketCon) {
			const socket = io(apiUrl, {
				// Disable autoConnect to have more control over headers
				reconnection: false,
				extraHeaders: {
					Authorization: `Bearer ${user.accessToken}`,
				},
			});

			socket.on("connect_error", (err) => {
				console.log(chalk.red("74: Home.js ~ connect_error"));
				console.log(err);

				reset(resetall);
			});

			socket.on("connect_failed", (err) => {
				console.log(chalk.red("84: Home.js ~ connect_failed"));
				console.log(err);

				reset(resetall);
			});

			socket.on("custom_error", (err) => {
				console.log(chalk.red("91: Home.js ~ custom_error"));
				console.log(err);

				// reset(resetall);
			});

			socket.on("disconnection", (res) => {
				console.log(
					chalk.red("99: Home.js ~ disconnection ~ res: ", res)
				);

				reset(resetall);
			});

			/* CUSTOMS */
			// NEW CONNECTION
			socket.on("new_connection", (response) => {
				console.log(
					"132: Home.js ~ socket: new_connection ~ response",
					response
				);

				const { rooms } = response;

				/**
				 *  rooms are fully populated
				 *  with owners, users, messages
				 */
				const updatedMessages = produce(roomMessages, (draft) => {
					for (let room of rooms) {
						for (let msg of room.messages) {
							draft.push(msg);
						}
					}
				});

				setRooms(rooms);
				setRoomMessages(updatedMessages);
				setCurRoom(rooms.find((room) => room.owner === null));
			});

			/** SOCKET ON USERS ON CONNECTION */
			socket.on("users_onConnection", (res) => {
				console.log("155: Home.js ~ socket: users onConnection: ", res);

				setUsers(res.allUsers);
				setActiveUsers(res.activeUsers);
			});

			/** SOCKET ON USERS ON DISCONNECTED */
			socket.on("users_onDisconnection", (res) => {
				console.log(
					"163: Home.js ~ socket: users onDisconnection: ",
					res
				);

				setUsers(res.allUsers);
				setActiveUsers(res.activeUsers);
			});

			/**  SOCKET ON NEW ROOM  */
			socket.on("new_room", (response) => {
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

			/**  SOCKET ON NEW MESSAGE */
			socket.on("new_message", (response) => {
				// console.log("new_message, response: ", response);

				setRoomMessages((prevMessages) => [...prevMessages, response]);
				setText("");

				autoscrollRef?.current?.scrollIntoView({ behavior: "smooth" });
			});

			window.socket = socket;
			setSocketCon(true);
		}
	}, []);

	return device.mobile ? null : (
		<HomeDesktop/>
	);
};
