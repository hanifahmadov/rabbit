/* eslint-disable */
import React from "react";

import { DesktopHeaderContainer } from "./desktopHeader.styled";

export const DesktopHeader = ({apiUrl, users, activeUsers, online}) => {
	return (
		<DesktopHeaderContainer>
			<div className='headerTitle'>
				Users
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
		</DesktopHeaderContainer>
	);
};
