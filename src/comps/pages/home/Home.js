/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { HomeSection } from "./home.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { socket, socketApi } from "../../../apis/socketApi";
import { io } from "socket.io-client";
import { userState } from "../../auth/authStore/states";
import { socketConnectionDefault } from "../../shared/store/states";
import { produce } from "immer";

export const Home = () => {
	const [message, setMessage] = useState("");
	const [socket, setSocket] = useState(false);
	const [newMsg, setNewMsg] = useState(false);
	const [connected, setConnected] = useRecoilState(socketConnectionDefault);
	const [data, setData] = useState([]);

	const user = useRecoilValue(userState);
	const textArea = useRef();
	const input = useRef();

	useEffect(() => {
		input.current.focus();
	}, []);

	useEffect(() => {
		if (!connected) {
			console.log("socket has been created");
			const URL =
				window.location.hostname === "localhost"
					? process.env.REACT_APP_SERVER_DEV
					: process.env.REACT_APP_SERVER_PRO;

			const socket = io(URL, {
				query: { _id: user._id },
			});

			socket.on("connection", (res) => {
				console.log(res);
			});

			socket.on("disconnected", (res) => {
				console.log(res);
			});

			socket.on("message", (res) => {
				console.log("response from socket", res);
				// data.push(res);	
				const newArr = [...data]
				newArr.push(res)

				setData(newArr);
			});

			setSocket(socket);
			setConnected(true);
		}
	}, []);

	// useEffect(() => {
	// 	console.log(data)
	// 	setData(data);
	// }, [newMsg]);

	const handleSubmit = (e) => {
		e.preventDefault();

		socket.emit("message", message);

		setMessage("");

		input.current.focus();
	};

	return (
		<HomeSection className='home'>
			<section className='chatboard' ref={textArea}>
				{console.log("data inside map ready to map", data)}
				{data.map((val, index) => (
					<li key={index}>{val}</li>
				))}
			</section>
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
