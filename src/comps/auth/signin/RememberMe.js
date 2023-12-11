/* eslint-disable */
import React from "react";
import { RememberMeSection } from "./Signin.styled";

export const RememberMe = () => {
	return (
		<RememberMeSection>
			<input type='checkbox' className='rememberMe_input' />
			<label className='rememberMe_text'>
				Remember Me
			</label>
		</RememberMeSection>
	);
};
