/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { HomeSection } from "./home.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { socket, socketApi } from "../../../apis/socketApi";
import { io } from "socket.io-client";
import { userState } from "../../auth/authStore/states";
import { socketConnectionDefault } from "../../shared/store/states";

export const Home = () => {
	const [message, setMessage] = useState("");
	const [socket, setSocket] = useState(false);
	const [connected, setConnected] = useRecoilState(socketConnectionDefault);

	const user = useRecoilValue(userState);
	const textArea = useRef();
	const input = useRef();

	useEffect(() => {
		input.current.focus();
	}, []);

	useEffect(() => {
		console.log("socket has been created");
		// const URL =
		// 	window.location.hostname === "localhost"
		// 		? process.env.REACT_APP_SERVER_DEV
		// 		: process.env.REACT_APP_SERVER_PRO;

		// const socket = io(URL, {
		// 	query: { _id: user._id },
		// });

		// socket.on("connection", (res) => {

		// });

		// socket.on("disconnected", (res) => {
		// 	console.log(res);
		// });

		// socket.on("message", (res) => {
		// 	console.log(res);
		// });

		if (!connected) {
			let socket = socketApi(user);
			setSocket(socket);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		socket.emit("message", message);

		setMessage("");
		input.current.focus();
	};

	return (
		<HomeSection className='home'>
			<section className='chatboard' ref={textArea}></section>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					autoComplete='off'
					required={true}
					ref={input}
				/>
				<button>send</button>
			</form>
		</HomeSection>
	);
};
