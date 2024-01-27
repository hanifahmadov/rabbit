/* eslint-disable */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

/* Styled */
import {
	AppLayoutSection,
	AppLayoutContentSection,
} from "./styled/appLayouts.styled";

/* Subs */
import { Header } from "../header/Header";

export const AppLayout = () => {
	/**
	 *  AppLayoutContainer has a 100 * 100 width and height
	 *  then will make the content center width justify content
	 */

	return (
		<AppLayoutSection className='__applayout__'>
			<AppLayoutContentSection>
				<Header />
				<Outlet />
			</AppLayoutContentSection>
		</AppLayoutSection>
	);
};
