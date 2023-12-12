/* eslint-disable */
import { io } from "socket.io-client";
import apiUrl from "./apiUrl";
import chalk from "chalk";

export const socketConnect = (user) => {
	const socket = io(apiUrl, {
		reconnection: true,
		// Disable autoConnect to have more control over headers
		extraHeaders: {
			Authorization: `Bearer ${user.accessToken}`
		},
	});

	socket.on("connect", (res) => console.log("connected"));

	socket.on("connect_error", (err) => {
		console.log(chalk.red("connect_error"));
		console.log(err)
	});

	socket.on("connect_failed", (err) => {
		console.log(chalk.red("connect_failed"));
		console.log(err);
	});

	socket.on("disconnect", (err) => {
		console.log(chalk.red("disconnect"));
		console.log(err);
	});

	socket.on("error", function (err) {
		console.log(chalk.red("error"));
		console.log(err);
	});

	return socket;
};
