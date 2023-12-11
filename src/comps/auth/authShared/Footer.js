import React from "react";
import { NavLink } from "react-router-dom";
import { FooterSection } from "./authShared.styled";

export const Footer = ({footerContent, footerLinkText, route}) => {
	return (

			<FooterSection>
				<p>
                    {footerContent}
					<NavLink to={route}>{footerLinkText}</NavLink>
				</p>
			</FooterSection>
	);
};
