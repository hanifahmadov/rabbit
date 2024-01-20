/* eslint-disable */
import React from "react";

import { MobileHeaderContainer } from "./mobileHeader.styled";

export const MobileHeader = ({apiUrl, users, activeUsers, online}) => {
	return (
		<MobileHeaderContainer>
			<div className='navbar-title'>
				<span className='span_header'>Users</span>
			</div>

			<div className='active_users'>
				{users.length &&
					users.map((user, index) => {
						return (
							<div
								key={index}
								className={
									online.includes(user._id) ? "active" : ""
								}
							>
								<img src={apiUrl + "/" + user.avatar} />
							</div>
						);
					})}
			</div>
		</MobileHeaderContainer>
	);
};