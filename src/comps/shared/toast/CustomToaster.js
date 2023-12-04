/* eslint-disable */
import React, { useRef } from "react";
import { ToasterContainer } from "./customtoast.styled";
import logoError from "../logos/error.png";
import logoSuccess from '../logos/success.png'



export const CustomToaster = ({ title, body }) => {

	const selectLogo = (title) => {
		console.log("title");
		console.log(title);
	
		let res = logoError;
	
		switch (title) {
			case 'Success':
				res = logoSuccess;
				break;
			case 'Error':
				res = logoError;
				break;
			default:
				res = logoError;
				break;
		}
	
		return res;
	};

	return (
		<ToasterContainer>
			<img src={selectLogo(title)} />
			<p>
				<span className='body'>{body}</span>
			</p>
		</ToasterContainer>
	);
};
