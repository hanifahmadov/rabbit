/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// styled
import {
	MessagesForm,
	HomeContainer,
	UsersSection,
	RoomsSection,
	RightSection,
	LeftSection,
	MessagesSection,
	Header,
	Content,
} from "./Home.styled";

// states
import {
	socketResponseDefault,
	socketStateDefaults,
} from "../shared/store/states";

import { socketConnect } from "../../apis/socketConnect";
import { userState } from "../auth/authStore/states";

export const Home = () => {
	const [socket, setSocket] = useRecoilState(socketStateDefaults);
	const [msg, setMsg] = useState("");
	const [res, setRes] = useState([]);
	const [submitted, setSubmitted] = useState(false);
	const [user, setUser] = useRecoilState(userState)

	let socketRef = useRef();

	console.log(socket)

	useEffect(() => {
		if (!socket.connected) {
			console.log("connect just run");

			socketRef.current = socketConnect(user);

			socketRef.current.on("new_connection", (response) => {
				console.log(response)
			})

			socketRef.current.on("new_disconnection", (response) => {
				console.log(response)
			})

			const newSocket = produce(socket, draft=> {
				draft.this = socketRef
			})

			setSocket(newSocket)
		}

		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			socketRef.current.removeAllListeners("new_connection");
			socketRef.current.removeAllListeners("new_disconnection");
		};

	}, []);

	useEffect(() => {
		socketRef.current.on("new_message", (response) => {
			let newRes = produce(res, (draft) => {
				console.log(response);
				draft = response;

				return draft;
			});

			// console.log("newRes before setRes", newRes)

			setRes(newRes);
			setMsg("");
		});

		

		return () => {
			// before the component is destroyed
			// unbind all event handlers used in this component
			socketRef.current.removeAllListeners("new_message");
		};
	}, [submitted]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("first");
		socketRef.current.emit("send_message", msg);
		setSubmitted(!submitted);
	};

	return (
		<HomeContainer id='home'>
			{console.log("response ready to map", res)}
			<LeftSection>
				<RoomsSection>
					<div className='header'>
						<h5>Rooms</h5>
					</div>

					<div className='content'></div>
				</RoomsSection>
				<UsersSection>
					<div className='header'>
						<h5>Users</h5>
					</div>

					<div className='content'></div>
				</UsersSection>
			</LeftSection>

			<RightSection>
				<MessagesSection></MessagesSection>

				<MessagesForm onSubmit={handleSubmit} id='form'>
					<input
						type='text'
						value={msg}
						placeholder='Type something here...'
						onChange={(e) => setMsg(e.target.value)}
					/>
					<button type='submit'>send</button>
				</MessagesForm>
			</RightSection>
		</HomeContainer>
	);
};
