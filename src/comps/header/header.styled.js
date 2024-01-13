/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	width: 100%;
	padding: 0rem;
	border: 4px solid black;





	.navbar-title {
		background: black;
		padding: 8px 10px;

		color: white;
		font-weight: 700;
		font-size: 1.2rem;
		width: 5rem;
		text-align: center;

		text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
		0px -4px 10px rgba(255,255,255,0.3);

	}

	.active_users {
		display: flex;
		display: flex;
		justify-content: center;
		align-items: center;


		background: black;

		margin-left: 2px;

		.span_users {
			background: black;
			display: inline-block;
			padding: 5px 10px;
			border-radius: 5px;
			font-size: 1.25rem;
			color: white;
			font-weight: 700;
			margin-right: 10px;
		}

		padding: 0.25rem;
		flex: 1;

		div {
			border-radius: 5px;
			border: 3px solid rgba(255, 255, 255, 0.5);
			overflow: hidden;
			cursor: pointer;

			z-index: 10;

			margin: 0 6px;

			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 5px;
				z-index: -10;
			}
		}

		.active {
			border-color: #009aff;

			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 5px;
				z-index: -10;
			}
		}
	}
`;
