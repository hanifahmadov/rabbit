/* eslint-disable */
import React, {useRef} from "react";
import { useRecoilState, useRecoilValue } from "recoil";

/* STYLED & APIs & IMG */
import apiUrl from "../../../../apis/apiUrl";
import { CurRoomDisplaySection } from "../styled/curRoom_display.styled";
import { curRoomState } from "../../../home/homeStore/states";
import { backArrow, chatsIcon2 } from "../../store_m/helpers";


/* SUBS */
import { MessageMobile } from "./MessageMobile";


export const CurRoomDisplay = () => {
	const curRoom = useRecoilValue(curRoomState);
	const roomName_withCapitilized = curRoom.name.charAt(0).toUpperCase() + curRoom.name.slice(1);
    const lastElementRef = useRef();

	const CurrentRoomHeader = () => (
		<section className='curRoomHeader'>
			<span className='backArrow'>
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

	return (
		<CurRoomDisplaySection>
			{CurrentRoomHeader()}
			{CurrentRoomBody()}
			<section className='curRoomFooter'></section>
		</CurRoomDisplaySection>
	);
};
