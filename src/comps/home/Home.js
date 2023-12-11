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

export const Home = () => {
	const [socket, setSocket] = useRecoilState(socketStateDefaults);
	const [msg, setMsg] = useState("");
	const [res, setRes] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	let socketRef = useRef();

	useEffect(() => {
		if (!socket.connected) {
			console.log("connect just run");
			socketRef.current = socketConnect();
		}
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
