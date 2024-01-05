/* eslint-disable */
import React from "react";
import { MessageContainer } from "./styled/message.styled";
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

	const customFormatDistanceToNow = (date) => {
		let distance = formatDistanceToNowStrict(date);
	  
		if (distance.includes('minute')) {
			let temp = distance.split(' ')
			temp[1] = 'm ago'
			return distance = temp.join('')
		} else if (distance.includes('hour')) {
			let temp = distance.split(' ')
			temp[1] = 'h ago'
			return distance = temp.join('')
		} else if (distance.includes('second')){
			let temp = distance.split(' ')
			temp[1] = 's ago'
			return distance = temp.join('')
		} 
	  
	

		return distance + ' ago'
	  };

	return (
		<MessageContainer pos={tempa}>
			<div className='main_wrapper'>
				<div className="section_avatar">
					<span className='avatar'>
						<img
							src={apiUrl + "/" + message.owner.avatar}
							alt='user avatar'
						/>
					</span>
				</div>

				<div className='section_text_timeago'>
					<span className='text'>{message.text}</span>
					<span className='time_ago'>
						{/* {formatDistanceToNowStrict(
							subDays(new Date(message.createdAt), 0),
							{
								addSuffix: true,
							}
						)} */}

						{customFormatDistanceToNow(subDays(new Date(message.createdAt), 0),
							{
								addSuffix: true,
							})}
					</span>
				</div>
			</div>
		</MessageContainer>
	);
};
