/* eslint-disable */
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";


//: styles
import { HeaderContainer } from "./header.styled";

//: images
import { Account } from "../shared/account/Account";

//: comps

export const Header = () => {
	return (
		<HeaderContainer>
			<div className='navbar'>
				<div className='navbar-title'>
					<NavLink to='/'>
						<h3>CHAT RABBIT</h3>
					</NavLink>
				</div>

				<div className='navbar-links'>
					<div className='links'>
						<span>
							{/* <NavLink to='about'>About</NavLink> */}
						</span>
						<span>
							{/* <NavLink to='projects'>Projects</NavLink> */}
						</span>
						<span>
							{/* <NavLink to='contact'>Contact</NavLink> */}
						</span>
					</div>

					<Account />
				</div>
			</div>
		</HeaderContainer>
	);
};
