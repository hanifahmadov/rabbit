/* eslint-disable */
import React from "react";
import googleLogo from "../../shared/logos/google-logo.jpeg";
import { GoogleSection } from "./Signin.styled";

export const Google = () => {
	return (
		<GoogleSection>
			<span className='googleLogo'>
				<img src={googleLogo} />
			</span>
			<span className='googleText'>Continue with Google</span>
		</GoogleSection>
	);
};
