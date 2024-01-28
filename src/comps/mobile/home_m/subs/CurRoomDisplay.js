/* eslint-disable */
import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

/* STYLED & APIs & IMG */
import apiUrl from "../../../../apis/apiUrl";
import { CurRoomDisplaySection } from "../styled/curRoom_display.styled";
import { curRoomState } from "../../../home/homeStore/states";
import { backArrow, chatsIcon2, send } from "../../store_m/helpers";
import { curRoomDisplayState, homeDisplayState } from "../../store_m/states";

/* SUBS */
import { MessageMobile } from "./MessageMobile";

export const CurRoomDisplay = () => {
	const [curRoomDisplay, setCurRoomDisplay] = useRecoilState(curRoomDisplayState);
	const [homeDisplay, setHomeDisplay] = useRecoilState(homeDisplayState);
	const [text, setText] = useState("");
	const inputRef = useRef();

	const curRoom = useRecoilValue(curRoomState);
	const roomName_withCapitilized = curRoom.name.charAt(0).toUpperCase() + curRoom.name.slice(1);
	const lastElementRef = useRef();

    if(inputRef.current){
        inputRef.current.scrollTop = inputRef.current.scrollHeight;
    }

	const handleBackArrow = () => {
		setCurRoomDisplay(false);
		setHomeDisplay(true);
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
				<span className='lastElement' ref={lastElementRef} />
			</section>
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

                <div className="send">
                    <span>
                        <img src={send} alt={"➤"} />
                    </span>
                </div>
			</section>
		);
	};

	return (
		<CurRoomDisplaySection>
			{console.log("first")}
			{CurrentRoomHeader()}
			{CurrentRoomBody()}
			{CurrentRoomFooter()}
		</CurRoomDisplaySection>
	);
};
