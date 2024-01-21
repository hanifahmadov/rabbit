/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilValue } from "recoil";
import { subDays } from "date-fns";

/* STATE & STYLED & APIS */
import { userState } from "../../../auth/authStore/states";
import { MessageSection } from "../styled/message.styled";
import apiUrl from "../../../../apis/apiUrl";

/* SUBS & HELPERS */
import { customFormatDistanceToNow } from "../../homeStore/helpers";

export const Message = ({ message }) => {
	const user = useRecoilValue(userState);
	const owner = message.owner?._id === user._id ? 1 : 0;

	return (
		<MessageSection owner={owner}>
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
		</MessageSection>
	);
};
