/* eslint-disable */
import styled from "styled-components";

export const SignupContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 35rem;

	border: 7px solid black;
	border-radius: 10px;
	overflow: hidden;

	color: white;

	header {
		border-bottom: 7px solid black;
		width: 100%;
		background: rgba(255, 0, 0, 0.2);

		h3 {
			text-align: center;
			font-size: 1.7rem;
			font-weight: 700;
			padding: 12px;
			margin: 0;
			text-shadow: 2px 2px 2px black;
			letter-spacing: 1px;
			font-family: "system-ui";
		}
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
		width: 21rem;
		header {

			h3 {
				font-size: 1.5rem;
				font-weight: 600;
				padding: 5px;
			}
		}
	`}
`;

export const SignupForm = styled.form`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	margin-bottom: .25rem;

	.top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 100%;
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
			flex-direction: column;
			justify-content: space-between;
			padding: 0px 10px 5px 10px;

		`}
`;

// export const RevealPasswordSpan = styled.span`
// 	//: display
// 	display: inline;

// 	//: position
// 	position: absolute;
// 	bottom: 21px;
// 	right: 5px;

// 	//: sizing
// 	width: 3rem;
// 	padding: 2px 5px;

// 	//: color
// 	color: black;

// 	//: text
// 	text-align: center;
// 	font-size: 0.8rem;
// 	font-weight: 700;

// 	//: border, shadows
// 	border: 1px solid black;
// 	border-radius: 3px;

// 	//: others
// 	cursor: pointer;

// 	//: pesudo
// 	&:active {
// 		color: white;
// 		background: black;
// 	}
// `;
