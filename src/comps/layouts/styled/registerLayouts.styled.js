/* eslint-disable */
import styled from "styled-components";

export const RegisterLayoutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	//: OUTLETS
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
