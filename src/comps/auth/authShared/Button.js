/* eslint-disable */
import React from "react";
import { StyledButton } from "./Styled";

export const Button = ({ disabled, val }) => {
	return (
		<StyledButton 
			className='btn btn-primary btn-block btn-large'
			disabled={!disabled}
		>
			{val}
		</StyledButton>
	);
};