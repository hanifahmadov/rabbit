/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

/* STYLED & APIs & IMG */
import apiUrl from "../../../../apis/apiUrl";
import { ChatDisplaySection } from "../styled/chat_display.styled";
import { curRoomState } from "../../../home/homeStore/states";
import { backArrow, chatsIcon2, send } from "../../store_m/helpers";
import { curRoomDisplayState, homeDisplayState } from "../../store_m/states";

/* SUBS */
import { MessageMobile } from "./MessageMobile";

export const ChatDisplay = () => {
	const [curRoomDisplay, setCurRoomDisplay] = useRecoilState(curRoomDisplayState);
	const [homeDisplay, setHomeDisplay] = useRecoilState(homeDisplayState);
	const [text, setText] = useState("");
	const [submit, setSubmit] = useState(false)
	const inputRef = useRef();

	const curRoom = useRecoilValue(curRoomState);
	const roomName_withCapitilized = curRoom.name.charAt(0).toUpperCase() + curRoom.name.slice(1);
	const lastElementMobileRef = useRef();

	if (inputRef.current) {
		inputRef.current.scrollTop = inputRef.current.scrollHeight;
	}

	useEffect(() => {
		lastElementMobileRef.current.scrollIntoView({ behavior: "smooth" });
	}, [submit]);


	const handleBackArrow = () => {
		setCurRoomDisplay(false);
		setHomeDisplay(true);
	};

	const handleSend = (e) => {
		if(!text.length) return;
		window.lastElement = lastElementMobileRef.current;
		window.socket.emit("send_message", {
			roomName: curRoom.name,
			roomId: curRoom._id,
			text,
		});

		
		inputRef.current.innerText = "";
		inputRef.current.focus();
		setSubmit(!submit)
		setText("");
	};

	const CurrentRoomHeader = () => (
		<section className='curRoomHeader'>
			<span className='backArrow' onClick={handleBackArrow}>
				<img src={backArrow} alt={"⬅️"} />
			</span>
			<span className='roomIcon'>
				<img src={apiUrl + "/" + curRoom.icon} alt='icon' />
			</span>
			<span className='roomName'>{roomName_withCapitilized}</span>
			<span className='defaultChatIcon'>
				<img src={chatsIcon2} alt='' />
			</span>
		</section>
	);

	const CurrentRoomBody = () => (
		<section className='curRoomBody'>
			<section className='messages'>
				{curRoom && curRoom.messages.map((msg, index) => <MessageMobile key={index} message={msg} />)}
			</section>
			<span className='lastElementMobile' ref={lastElementMobileRef} />
		</section>
	);

	const CurrentRoomFooter = () => {
		return (
			<section className='curRoomFooter'>
				<div
					className='input'
					ref={inputRef}
					contentEditable={true}
					suppressContentEditableWarning={true}
					onInput={(e) => setText(e.currentTarget.textContent)}
				></div>

				<div className='send' onClick={handleSend}>
					<img src={send} alt={"➤"} />
					<span className='whiteBG' />
				</div>
			</section>
		);
	};

	return (
		<ChatDisplaySection text={text.length}>
			{CurrentRoomHeader()}
			{CurrentRoomBody()}
			{CurrentRoomFooter()}
		</ChatDisplaySection>
	);
};
