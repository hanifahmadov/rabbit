/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { HomeSection } from "./home.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { socket } from "../../../apis/socketApi";
import { io } from "socket.io-client";

export const Home = () => {
	const [message, setMessage] = useState("");
	const [update, setUpdate] = useState(false);
	const textArea = useRef();
	const input = useRef();

	let temp = null;

	const URL =
		window.location.hostname === "localhost"
			? process.env.REACT_APP_SERVER_DEV
			: process.env.REACT_APP_SERVER_PRO;

	const socket = io(URL);

	socket.on("connect", () => {
		console.log(`${socket.id} connected to server`);
	});

	temp = socket;

	setUpdate(!update);

	console.log("sikko");

	useEffect(() => {
		input.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		let el = document.createElement("li");
		el.innerHTML = message;
		textArea.current.append(el);

		socket.emit("message", message);
		socket.on("message", (data) => {
			let el = document.createElement("li");
			el.textContent = data;
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
