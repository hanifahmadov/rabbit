/* eslint-disable */
import styled from "styled-components";

export const SignupContainer = styled.section`
	// border: 5px solid white;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 100%;

	color: white;

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

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.section_avatar {
			width: 65%;
			height: 10rem;
			background: rgba(0, 0, 0, .5);
			padding: 1rem;
			text-align: center;

			display: flex;
			flex-direction: column;
			justify-content: center;

			margin-bottom: 1rem;
			border: 4px solid rgba(255, 255, 255, .4);
			border-radius: 5px;
	

			.label_avatar {
				cursor: pointer;
				background: rgba(255, 255, 255, .1);
				padding: 8px 2px;
				color: white;
				font-weight: 700;
				font-size: .9rem;
				border-radius: 5px;
				transition: all .2s ease-in-out;

				&:hover {
					background: rgba(255, 255, 255, .15);
				}
			}
			

		}
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
	bottom: 21px;
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
