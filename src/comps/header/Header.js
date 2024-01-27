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
import { HeaderDesktop } from "../desktop/header_d/HeaderDesktop";
import { HeaderMobile } from "../mobile/header_m/HeaderMobile";

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
		<HeaderContainer className='__header__'>
			{device.mobile ? <HeaderMobile /> : <HeaderDesktop apiUrl={apiUrl} users={users} activeUsers={activeUsers} online={online} />}
		</HeaderContainer>
	);
};
