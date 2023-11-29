/* eslint-disable */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

//:style
import { AppLayoutSection, AppContentSection } from "./Styled";

//: comps
import { Header } from "../pages/header/Header";

export const AppLayout = () => {
	// let location = useLocation();
	// console.log(location, 'localion::')

	/**
	 *  AppLayoutContainer has a 100 * 100 width and height
	 *  then will make the content center width justify content
	 */

	return (
		<AppLayoutSection>
			<AppContentSection>
				<Header />
				<Outlet />
			</AppContentSection>
		</AppLayoutSection>
	);
};
