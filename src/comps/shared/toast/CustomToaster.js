/* eslint-disable */
import React, { useRef } from "react";
import { ToasterContainer } from "./customtoast.styled";
import logo from "../logos/error.png";

export const CustomToaster = ({ title, body }) => {
	return (
		<ToasterContainer>
			<img src={logo} />
			<p>
				<span className='title'>{title} </span>
				<span className='body'>{body}</span>
			</p>
		</ToasterContainer>
	);
};
