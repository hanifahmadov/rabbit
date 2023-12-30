/* eslint-disable */
import styled from "styled-components";
import { clr } from "../shared/store/design";

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	width: 100%;

	padding: 0.25rem .5rem;

	height: 5rem; 
	border: 4px solid black;

	// background: rgba(0, 0, 0, .2);
	// backdrop-filter: blur(5px);

	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;

	.navbar-title {
		a {
			text-decoration: none;
			padding: 0px;

			h3 {
				padding: 0px;
				margin: 0px;
				color: black;
			}
		}
	}

	.active_users {
		display: flex;
		display: flex;
		justify-content: center;
		align-items: center;



		padding: 0.25rem;
		flex: 1;

		div {
			border-radius: 5px;
			border: 3px solid rgba(255, 255, 255, .5);
			overflow: hidden;
			cursor: pointer;

			z-index: 10;

			margin: 0 6px;

			img{
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 5px;
				z-index: -10;

			}
		}

		.active {
			border-color: #009aff;

			img{
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 5px;
				z-index: -10;

			}
		}


	}
`;
