/* eslint-disable */
import styled from "styled-components";

export const SignupContainer = styled.section`
	// border: 5px solid white;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 100%;

	color: black;

	header {
		h3 {
			text-align: center;
			font-size: 2rem;
			font-weight: 700;
		}
	}

	form {
		width: 100%;
		
		margin-top: 15px;
	}

	//: pwd, confirmPwd
	//! helps to keep the show password span
	//! inside the pwd, confirmPwd input right side
	section {
		position: relative;
		width: 100%;
	}
`;

export const RevealPasswordSpan = styled.span`
	//: display
	display: inline;

	//: position
	position: absolute;
	bottom: 7px;
	right: 5px;

	//: sizing
	width: 3rem;
	padding: 2px 5px;

	//: color
	color: black;

	//: text
	text-align: center;
	font-size: 0.8rem;
	font-weight: 700;

	//: border, shadows
	border: 1px solid black;
	border-radius: 3px;

	//: others
	cursor: pointer;

	//: pesudo
	&:active {
		color: white;
		background: black;
	}
`;
