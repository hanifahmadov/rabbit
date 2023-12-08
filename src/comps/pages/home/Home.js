/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { HomeSection } from "./home.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { socket } from "../../../apis/socketApi";
import { io } from "socket.io-client";
import { userState } from "../../auth/authStore/states";

export const Home = () => {
	const [message, setMessage] = useState("");
	const [update, setUpdate] = useState(false);
	const user = useRecoilValue(userState);
	const textArea = useRef();
	const input = useRef();

	useEffect(() => {
		if (user?._id) {
			console.log("Create socketIo-client");
			const URL =
				window.location.hostname === "localhost"
					? process.env.REACT_APP_SERVER_DEV
					: process.env.REACT_APP_SERVER_PRO;

			const socket = io(URL, {
				query: { _id: user._id },
			});

			

			socket.on("connect_error", function (err) {
				// handle server error here
				console.log("Error connecting to server");
			});

			window.socket = socket;
		}
	}, []);

	useEffect(() => {
		input.current.focus();
	}, []);

	const handleSubmit = (e) => {
		console.log(window);

		e.preventDefault();

		// let el = document.createElement("li");
		// el.innerHTML = message;
		// textArea.current.append(el);

		let socket = window.socket;

		socket.emit("sendMessage", message);

		socket.on("respondMessage", (msg) => {
			let el = document.createElement("li");
			el.innerHTML = msg;
			textArea.current.append(el);
		});

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
