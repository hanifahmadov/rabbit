/* eslint-disable */
import React from "react";

/* STYLED & APIs & IMG */
import { HomeDesktopSection } from "./home_desktop.styled";

/* SUBS */
import { Left } from "./left/Left";
import { Right } from "./right/Right";

export const HomeDesktop = ({}) => {
	return (
		<HomeDesktopSection className="__homedesktop__">
			<Left />
			<Right/>
		</HomeDesktopSection>
	);
};

/* 


			



*/
