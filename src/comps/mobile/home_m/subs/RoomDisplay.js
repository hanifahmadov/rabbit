/* eslint-disable */
/* NPM */
import React from "react";
import { subDays } from "date-fns";

/* STYLED & STATES & APIS & HELPERS */
import { RoomDisplaySection } from "../styled/room_display.styled";
import apiUrl from "../../../../apis/apiUrl";
import { customFormatDistanceToNow } from "../../../home/homeStore/helpers";

export default function RoomDisplay({ room }) {
	const lastMessage = room.messages[room.messages.length - 1];

	const lastMessageText = lastMessage.text.length > 25 ? lastMessage.text.slice(0, 25) + ' . . .' : lastMessage.text;
	const lastMessageOwner = lastMessage.owner.username;
	const lastMessageOwner_withCapitilized = lastMessageOwner.charAt(0).toUpperCase() + lastMessageOwner.slice(1);
	const roomName_withCapitilized = room.name.charAt(0).toUpperCase() + room.name.slice(1);
	const lastMessageDate = lastMessage.createdAt;

	return (
		<RoomDisplaySection>
			<section className='roomicon'>
				<img src={apiUrl + "/" + room.icon} alt='icon' />
			</section>

			<section className='roominfo'>
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
			</section>
		</RoomDisplaySection>
	);
}
