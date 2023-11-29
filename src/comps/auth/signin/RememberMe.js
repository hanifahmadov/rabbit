/* eslint-disable */
import React from "react";
import { RememberMeSection } from "./Styled";

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
