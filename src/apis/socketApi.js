/* eslint-disable */
import { io } from "socket.io-client";

export const socketApi = (user) => {
	const URL =
		window.location.hostname === "localhost"
			? process.env.REACT_APP_SERVER_DEV
			: process.env.REACT_APP_SERVER_PRO;

	const socket = io(
		URL,
		{
			query: { _id: user._id },
		}
	);

	// socket on connection
	socket.on("connection", (res) => {});

	// socket on disconnection
	socket.on("disconnected", (res) => {
		console.log(res);
		io.sockets.disconnect();
		io.sockets.close();
	});

	// socket handle error
	socket.on("connect_error", function (err) {
		// handle server error here
		console.log("Error connecting to server");
	});

	// socket listen on "message" event
	socket.on("message", (res) => {
		console.log(res);
	});

	return socket;
};
