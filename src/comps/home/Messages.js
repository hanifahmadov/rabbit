/* eslint-disable */
import React from "react";
import { MessageContainer } from "./styled/messageContainer.styled";
import apiUrl from "../../apis/apiUrl";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

export const Messages = ({ message, user }) => {
	let tempa = message.owner._id === user._id ? 1 : 0;

	console.log(message);

	return (
		<MessageContainer pos={tempa}>
			<span className={"text"}>
				<span className='avatar'>
					<img
						src={apiUrl + "/" + message.owner.avatar}
						alt='user avatar'
					/>
					
				</span>

				{message.text}


				<span className='time_ago'>
					{formatDistanceToNowStrict(
						subDays(new Date(message.createdAt), 0),
						{
							addSuffix: true,
						}
					)}
				</span>
			</span>
		</MessageContainer>
	);
};
