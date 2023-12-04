/* eslint-disable */
import { io } from "socket.io-client";

const URL =
	window.location.hostname === "localhost"
		? process.env.REACT_APP_SERVER_DEV
		: process.env.REACT_APP_SERVER_PRO;

export const socket = io(URL);
