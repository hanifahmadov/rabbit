/* eslint-disable */
import styled from "styled-components";
import { clr } from "../../shared/store/design";

export const AppLayoutSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const AppLayoutContentSection = styled.section`
	display: flex;
	flex-direction: column;

	height: 100vh;
	width: 50rem;

	border: 3px solid white;
	background: black;

	//: For Modal in Auth-Layout
	position: fixed;
	backdrop-filter: blur(10px);

	${({ theme }) => theme.device.tablet && `
		width: 100%;
	`}
`;
