/* eslint-disable */
import { io } from "socket.io-client";
import apiUrl from "./apiUrl";

export const socketConnect = (user) => {
	const socket = io(apiUrl, { reconnection: false }, {
		query: user._id
	});

	socket.on("connect", (res) => console.log('connected'));

	socket.on("connect_error", (err) => console.log('connection_error'));

	socket.on("connect_failed", (err) => console.log('connection_failed'));

	socket.on("disconnect", (err) =>console.log('disconnect'));

	return socket;
};
