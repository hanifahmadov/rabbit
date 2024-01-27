/* eslint-disable */
import React from "react";

import { HeaderDesktopSection } from "./header_desktop.styled";

export const HeaderDesktop = ({apiUrl, users, activeUsers, online}) => {
	return (
		<HeaderDesktopSection className="__headerdesktop__">
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
		</HeaderDesktopSection>
	);
};
