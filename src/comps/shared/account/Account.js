/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { NavLink, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

//: images
import logo from "../logos/astr.png";

//: state & apis & styled
import {
	displayNavbarAccountState,
	socketStateDefaults,
} from "../store/states";
import { AccountContainer } from "./account.styled";
import { signOutApi } from "../../../apis/apiCalls";
import { userState } from "../../auth/authStore/states";

export const Account = () => {
	const [user, setUser] = useRecoilState(userState);
	const resetUser = useResetRecoilState(userState);
	const socket = useRecoilValue(socketStateDefaults);

	const [dis, setDis] = useRecoilState(displayNavbarAccountState);
	const navigate = useNavigate();

	let dropDownVariant = {
		defaults: {
			display: "none",
			opacity: 0,
		},

		anime: {
			display: dis ? "block" : "none",
			opacity: dis ? 1 : 0,

			transition: {
				delay: 0.1,
			},
		},
	};

	const handleOutsideClick = (e) => {
		let val = e.target.className;

		if (val === "account-img") {
			setDis(!dis);
		} else {
			setDis(false);
		}
	};

	const handleLinksClick = (e) => {
		setDis(false);
	};

	const handleSignOut = async () => {
		signOutApi(user)
			.then((res) => {
				console.log("sign out result");
				console.log(res);

				let a = socket.this.current.disconnect()

				console.log(a)
				console.log('disconnectedddddd')
				resetUser();
				navigate("/");
			})
			.catch((err) => {
				console.log("sign out err");
				console.log(err);
			});
	};

	return (
		<AccountContainer className='account' $displayNavbarAccount={dis}>
			<div className='account-img'>
				<img src={logo} alt='logo' className='account-img' />
			</div>

			<OutsideClickHandler onOutsideClick={handleOutsideClick}>
				<motion.div
					className='account-dropdown'
					variants={dropDownVariant}
					initial='defaults'
					animate='anime'
				>
					<div className='triangle'></div>

					<div className='account-dropdown-links'>
						<span className='account-dropdown-links-img'>
							<img src={logo} alt='logo' />
						</span>
						<div>
							<NavLink to='#' onClick={handleLinksClick}>
								Settings
							</NavLink>
						</div>
						<div>
							<NavLink to='#' onClick={handleLinksClick}>
								Orders
							</NavLink>
						</div>
						<div>
							<NavLink
								onClick={() => {
									handleLinksClick();
									handleSignOut();
								}}
							>
								Sign Out
							</NavLink>
						</div>
					</div>
				</motion.div>
			</OutsideClickHandler>
		</AccountContainer>
	);
};
