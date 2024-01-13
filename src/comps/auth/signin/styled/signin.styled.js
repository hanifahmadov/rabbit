/* eslint-disable */
import styled from "styled-components";

export const SigninSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 21rem;

	color: white;
	border: 7px solid black;
	border-radius: 10px;
	overflow: hidden;

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

	${({theme}) => theme.device.mobile && `
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

export const SigninFooter = styled.div`
	width: 100%;
	background: black;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px;
	
	border-top: 7px solid black;

	p {
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 0.95rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		font-style: italic;
		margin: 0;
	}

	.login {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1rem;
		margin-left: 8px;
		color: rgba(4, 145, 255);
		background: rgba(255, 255, 255, 0.1);
		padding: 2px 8px;
		border-radius: 5px;
		cursor: pointer;
		font-style: normal;
		font-weight: 700;
		text-shadow: 1px 1px 2px black;

		&:hover {
			background: rgba(255, 255, 255, 0.15);
		}
	}
`;