/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const AppLayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;

	// border: 4px solid black;
	padding: ${({theme}) => theme.device.mobile ? '5px' : '20px'};
`;

export const AppLayoutContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	height: 100%;
	width: 60rem;

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


		height: 100%;
		width: 100%;


		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		background: transparent;
		backdrop-filter: blur(50px);
		// border: 10px solid green;

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
