/* eslint-disable */
/* NPM */
import React from "react";
import { subDays } from "date-fns";
import { useRecoilState } from "recoil";

/* STYLED & STATES & APIS & HELPERS */
import apiUrl from "../../../../apis/apiUrl";
import { RoomDisplaySection, RoomDisplayInfo } from "../styled/room_display.styled";
import { customFormatDistanceToNow } from "../../../home/homeStore/helpers";
import { curRoomState } from "../../../home/homeStore/states";
import { curRoomDisplayState, homeDisplayState } from "../../store_m/states";

/* SUBS */

export default function RoomDisplay({ room }) {

	const [curRoom, setCurRoom] = useRecoilState(curRoomState);
	const [curRoomDisplay, setCurRoomDisplay] = useRecoilState(curRoomDisplayState);
	const [homeDisplay, setHomeDisplay] = useRecoilState(homeDisplayState);

	const lastMessage = room.messages[room.messages.length - 1];
	const lastMessageText = lastMessage.text.length > 25 ? lastMessage.text.slice(0, 25) + ' . . .' : lastMessage.text;
	const lastMessageOwner = lastMessage.owner.username;
	const lastMessageOwner_withCapitilized = lastMessageOwner.charAt(0).toUpperCase() + lastMessageOwner.slice(1);
	const roomName_withCapitilized = room.name.charAt(0).toUpperCase() + room.name.slice(1);
	const lastMessageDate = lastMessage.createdAt;

	const handleRoomDisplayClick = (e) => {
		setCurRoom(room)
		setCurRoomDisplay(true)
		setHomeDisplay(false)
		
	}

	return (
		<RoomDisplaySection >
			<section className='roomicon'>
				<img src={apiUrl + "/" + room.icon} alt='icon' />
			</section>

			<RoomDisplayInfo onClick={handleRoomDisplayClick}>
				<section className='roomTitle'>{roomName_withCapitilized}</section>
				<section className='lastMessage'>
					<section className='lastMessage_content'>
						<span className='owner'>{lastMessageOwner_withCapitilized}</span> :
						<span className='ownerText'> {lastMessageText}</span>
					</section>
					<section className='lastMessage_time'>
						{customFormatDistanceToNow(subDays(new Date(lastMessageDate), 0), {
							addSuffix: true,
						})}
					</section>
				</section>
			</RoomDisplayInfo>
		</RoomDisplaySection>
	);
}
