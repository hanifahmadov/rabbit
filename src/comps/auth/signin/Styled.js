/* eslint-disable */
import styled from "styled-components";
import { ff } from "../../shared/store/design";

//# SIGN IN
export const SigninSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	color: white;

	width: 100%;

	header {
		h3 {
			font-size: 2.5rem;
			font-weight: 700;
		}
	}

	form {
		margin-top: 15px;
		width: 100%;
	}

	//: or
	.or {
		width: 100%;
		text-align: center;
		margin: 1rem;

		span {
			font-weight: 500;
			font-size: 0.9rem;

			&::before {
				content: "";
				display: inline-block;
				position: relative;
				bottom: 4px;
				width: 40%;
				margin-right: 1rem;
				border: 0.5px solid white;
			}

			&::after {
				content: "";
				display: inline-block;
				position: relative;
				bottom: 4px;
				width: 40%;
				margin-left: 1rem;
				border: 0.5px solid white;
			}
		}
	}
`;

export const RememberMeSection = styled.section`

	display: flex;
	flex-direction row;
	margin-top: 15px;
	margin-left: 1px;


	.rememberMe_input{
		width: 15px;
	}

	.rememberMe_text {
		font-weight: 600;
		margin-left: 5px;
		
	}
`;

export const GoogleSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	background: rgba(255, 255, 255, 0.1);
	transition: background 0.2s ease-in-out;
	padding: 0.5rem 0.75rem;
	border-radius: 5px;
	cursor: pointer;

	.googleLogo {
		width: auto;

		img {
			width: 1.5rem;
			border-radius: 50%;
		}
	}

	.googleText {
		display: inline-block;
		padding: 0rem 1rem;
		font-size: 0.9rem;

		font-family: ${ff.opensans};
		font-weight: 700;

		width: 80%;
		text-align: center;
	}

	&:hover + .google-text {
	}

	&:hover {
		background: rgba(255, 255, 255, 0.2);
	}
`;
