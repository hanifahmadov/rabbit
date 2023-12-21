/* eslint-disable */
import React from "react";
import { RoomDetailsContainer } from "./Styled";
import apiUrl from "../../apis/apiUrl";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

export const RoomDetails = ({ currentRoom }) => {
	// ROOM CREATED AT
	const currentDate = new Date(currentRoom.createdAt);
	const MonthsBefore = subMonths(currentDate, 40);
	const formattedCreatedAt = format(MonthsBefore, "yyyy MMM dd");

	return (
		<RoomDetailsContainer>
			<div className='room_header'>
				Room{" "}
				{currentRoom.name &&
					currentRoom.name[0].toUpperCase() +
						currentRoom.name.slice(1)}
			</div>

			<div className='room_details'>
				<div className='room_icon'>
					<img src={apiUrl + "/" + currentRoom.icon} alt='' />

					<button>change icon</button>
				</div>

				<div className='room_detail_header'>Details</div>

				<div className='room_detail_content'>
					<div className='users_count'>
						<span className='text'>Users</span>
						<span className='count'>
							[ {currentRoom.users.length} ]
						</span>
					</div>

					<div className='created_by'>
						<span className='text'>Created by</span>
						<span className='owner_name'>
							{currentRoom.owner
								? currentRoom.owner.email
								: "System"}
						</span>
					</div>

					<div className='created_at'>
						<span className='text'>Created at</span>
						<span className='format_time_ago'>
							{format(
								new Date(formattedCreatedAt),
								"yyyy MMM dd"
							)}
						</span>
					</div>
				</div>
			</div>

			<div className='room_users'>
				<div className='header'>Users</div>

				{currentRoom.users &&
					currentRoom?.users.map((user) => (
						<div key={user._id} className='user'>
							<div className='user_img'>
								<img
									src={apiUrl + "/" + user.avatar}
									alt='user_avatar'
								/>
							</div>
							<div className='user_details'>
								<span className='username'>
									{user.email.split("@")[0]}
								</span>
								<span className='joined'>joined</span>
								<span className='time_ago'>
									{formatDistanceToNowStrict(
										subDays(new Date(user.createdAt), 0),
										{
											addSuffix: true,
										}
									)}
								</span>
							</div>
						</div>
					))}
			</div>
		</RoomDetailsContainer>
	);
};
