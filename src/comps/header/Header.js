/* eslint-disable */
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

//: styles
import { HeaderContainer } from "./header.styled";

//: images
import userLogo from "../shared/logos/vvv.png";
import { useRecoilValue } from "recoil";
import { allUsersDefault } from "../shared/store/states";
import apiUrl from "../../apis/apiUrl";

//: comps

export const Header = () => {
	const allUsers = useRecoilValue(allUsersDefault);
	

	console.log(allUsers);

	return (
		<HeaderContainer>
			<div className='navbar-title'>
				<NavLink to='/'>
					<h3>CHAT RABBIT</h3>
				</NavLink>
			</div>

			<div className='active_users'>
				{allUsers.length &&
					allUsers.map((user, index) => {
						return (
							<div
								key={index}
								className={user.signedIn ? "active" : ''}
							>
								<img src={apiUrl + "/" + user.avatar} />
							</div>
						);
					})}
			</div>
		</HeaderContainer>
	);
};
