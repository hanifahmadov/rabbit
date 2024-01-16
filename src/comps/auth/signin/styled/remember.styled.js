/* eslint-disable */
import styled from "styled-components";

export const RememberSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: flex-center;
	align-items: center;

	width: 100%;
	padding: 8px 4px;
	margin: 10px 0px 5px 0px;

	background: ${({ remember }) => (remember ? "#220000" : "black")};
	border-radius: 5px;

	transition: all 0.3s ease-in-out;

	input {
		cursor: pointer;
	}

	.rememberme_text {
		margin-left: 5px;
		padding: 2px 5px;
		font-weight: 700;
		font-size: 0.9rem;
		text: center;
		color: ${({ remember }) =>
			remember ? "white" : "rgba(255, 255, 255, 0.5)"};
		transition: color 0.3s ease-in-out;
		letter-spacing: 0.25px;
		text-shadow: 2px 2px 2px black;
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
			padding: 5px;
			font-size: .8rem;

			.rememberme_text {

				padding: 0px;
				font-weight: 600;
				font-size: .8rem;
		

			}
	
	`}
`;
