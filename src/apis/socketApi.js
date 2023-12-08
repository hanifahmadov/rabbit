/* eslint-disable */
import { useRecoilValue } from "recoil";
import { io } from "socket.io-client";
import { socketConnectionDefault } from "../comps/shared/store/states";



export const useSocketApi = (user) => {
	const [connect, setConnect] = useRecoilValue(socketConnectionDefault);

	const URL =
		window.location.hostname === "localhost"
			? process.env.REACT_APP_SERVER_DEV
			: process.env.REACT_APP_SERVER_PRO;

	const socket = io(URL, {
		query: { _id: user._id },
	});

	socket.on("connection", (socket) => {
		setConnect(true)
		console.log("you have connected to server");
	});

	socket.on("connect_error", function (err) {
		// handle server error here
		console.log("Error connecting to server");
	});

	return socket;
};


