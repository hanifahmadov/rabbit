/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const AppLayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;

	// border: 5px solid yellow;

	border: 4px solid black;

	padding: 20px;

`;

export const AppLayoutContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	height: 100%;
	width: 70rem;

	// border: 5px solid yellow;

	//: this is for modal in Auth Layout
	position: relative;
	background: ${clr.dark02}
	backdrop-filter: blur(10px);
`;

export const RegisterLayoutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	// background: red;


	//: outlets
	.outlets {

		width: 30rem;
		padding: 2.5rem 5rem 2.5rem 5rem;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(50px);
		border: 5px solid white;

	}

	

	// //: backdrop
	// #backdrop {
	// 	&::before {
	// 		content: "";
	// 		display: inline;
	// 		position: absolute;
	// 		z-index: 1;
	// 		top: 0;
	// 		left: 0;

	// 		height: 100vh;
	// 		width: 100vw;
	// 		background-color: rgba(0, 0, 0, 0.4);
	// 	}
	// }
`;
