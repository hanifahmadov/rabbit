/* eslint-disable */
import styled from "styled-components";
import { ff } from "../../../shared/store/design";

export const ChatsSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	padding: 15px 30px;
	background: #f8feff;


	.title {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.8rem;
		font-weight: 700;
		font-family: ${ff.opensans};
		color: black;
	}

	.createRoom {
		margin-top: 8px;

		background: #0e6efd;
		border-radius: 50%;

		cursor: pointer;
		padding: 5px;
		margin: 5px 0px;
		transition: all 0.1s ease-in-out;



		span {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 1.25rem;
			height: 1.25rem;

			font-size: 1.25rem;
			border-radius: 50%;

			line-height: 0px;
			font-wight: 800px;
			padding-bottom: 3px;
			cursor: pointer;
			color: white;

			&:active {
				color: white;
			}
		}

		&:active {
			background: #0056d6;
		}
	}
`;

/* 

.active_users {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;

		padding: 5px 20px;
		overflow: auto;

		div {
			border-radius: 5px;
			border: 3px solid rgba(255, 255, 255, 0.2);
			overflow: hidden;
			cursor: pointer;

			z-index: 10;
			margin: 0 6px;

			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 0px;
				z-index: -10;
			}
		}

		.active {
			border-color: rgba(0, 160, 255, 1);

			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				z-index: -10;
			}
		}
	}

*/
