/* eslint-disable */
import styled from "styled-components";

export const LeftSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	position: relative;

	height: 100%;
	width: 6rem;

	border-right: 3px solid white;

	background: rgba(0, 0, 0, 1);

	.roomTitle {
		display: flex;
		justify-content: center;
		align-items: center;

		color: white;
		width: 100%;

		font-size: 1.5rem;
		font-weight: 600;
		font-family: system-ui;
		letter-spacing: 0.5px;
		padding: 5px 0px;
		border-bottom: 3px solid white;

		background: black;
	}

	.rooms {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		height: 100%;
		width: 100%;

		padding-top: 5px;
	}
`;

export const CreateDetailsAccount = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;

	height: 17rem;
	width: 100%;

	border-top: 3px solid white;
	// box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;

	.createRoom,
	.roomDetails {
		background: rgba(255, 255, 255, 0.4);
		border: 3px solid rgba(0, 0, 0, 0.3);
		border-radius: 50%;

		cursor: pointer;
		padding: 5px;
		margin: 5px 0px;
		transition: all 0.1s ease-in-out;
	}

	.createRoom {
		margin-top: 8px;
		span {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 2rem;
			height: 2rem;

			font-size: 2rem;
			border-radius: 50%;

			line-height: 0px;
			font-wight: 700px;
			padding-bottom: 3px;
			cursor: pointer;
		}

		&:active {
			border-color: rgba(255, 255, 255, 1);
			color: white;
		}
	}

	.roomDetails {
		margin-bottom: 8px;
		span {
			img {
				width: 2rem;
				height: 2rem;
			}
		}

		&:active {
			border-color: rgba(255, 255, 255, 1);
			color: white;
		}
	}

	.userAccount {
		display: flex;
		border-top: 3px solid rgba(255, 255, 255, .8);
		width: 100%;
		padding: 5px;
		justify-content: center;
	}
`;
