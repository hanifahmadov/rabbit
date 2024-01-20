/* eslint-disable */

/* NPM Packages */
import React, { Fragment, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

/* Styled & Apis & State */
import apiUrl from "../../apis/apiUrl";
import { HeaderContainer } from "./header.styled";
import { usersState, activeUsersState } from "../home/homeStore/states";
import { deviceState } from "../shared/store/states";

/* Subs */
import { DesktopHeader } from "./headerDesktop/DesktopHeader";
import { MobileHeader } from "./headerMobile/MobileHeader";

export const Header = () => {
	const users = useRecoilValue(usersState);
	const activeUsers = useRecoilValue(activeUsersState);
	const device = useRecoilValue(deviceState);

	const online = users.map((user) => {
		if (activeUsers.includes(user._id)) {
			return user._id;
		}
	});

	return (
		<HeaderContainer>
			{device.mobile ? (
				<MobileHeader
					apiUrl={apiUrl}
					users={users}
					activeUsers={activeUsers}
					online={online}
				/>
			) : (
				<DesktopHeader
					apiUrl={apiUrl}
					users={users}
					activeUsers={activeUsers}
					online={online}
				/>
			)}
		</HeaderContainer>
	);
};
