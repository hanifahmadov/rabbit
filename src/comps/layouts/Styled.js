/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const AppLayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;

	padding: 20px;

	${({ theme }) =>
		theme.device.mobile &&
		`
		padding: 5px;
	
	`};
`;

// export const AppLayoutContent = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	flex-direction: column;

// 	height: 100%;
// 	width: 200rem;
// `;

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
