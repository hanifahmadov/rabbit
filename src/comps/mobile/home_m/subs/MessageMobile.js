/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilValue } from "recoil";
import { subDays } from "date-fns";


/* STATE & STYLED & APIS & HELPERS */
import apiUrl from "../../../../apis/apiUrl";
import { userState } from "../../../auth/authStore/states";
import { MessageMobileSection } from "../styled/message_mobile.styled";
import { customFormatDistanceToNow } from "../../../home/homeStore/helpers";


/* SUBS & HELPERS */


export const MessageMobile = ({ message }) => {
	const user = useRecoilValue(userState);
	const owner = message.owner?._id === user._id ? 1 : 0;

	console.log("message owner avatar: ", apiUrl + "/" + message.owner.avatar)


	return (
		<MessageMobileSection owner={owner}>
			<div className='contentWrapper'>
				<div className='avatarWrapper'>
					<span className='avatar'>
						<img
							src={apiUrl + "/" + message.owner.avatar}
							alt='user avatar'
						/>
					</span>
				</div>

				<div className='textWrapper'>
					<span className='text'>{message.text}</span>
					<span className='time_ago'>
						{customFormatDistanceToNow(
							subDays(new Date(message.createdAt), 0),
							{
								addSuffix: true,
							}
						)}
					</span>
				</div>
			</div>
		</MessageMobileSection>
	);
};
