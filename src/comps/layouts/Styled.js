/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const AppLayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;



	${({ theme }) =>
		theme.device.mobile &&
		`
		padding: 5px;
	
	`};
`;

export const AppLayoutContent = styled.div`
	display: flex;

	flex-direction: column;

	height: 100%;
	width: 50rem;


	//: this is for modal in Auth Layout
	position: relative;
	background: ${clr.dark02};
	backdrop-filter: blur(10px);
`;

export const RegisterLayoutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	//: outlets
	.outlets {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		height: 100%;
		width: 100%;

		background: transparent;

		${({ theme }) =>
			theme.device.mobile &&
			`
			justify-content: flex-start;
			padding: .5rem 0rem;
		
		`};
	}
`;
