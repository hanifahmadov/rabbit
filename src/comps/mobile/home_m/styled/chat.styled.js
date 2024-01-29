/* eslint-disable */
import styled from "styled-components";
import { ff } from "../../../shared/store/design";

export const ChatSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	padding: 5px 0px;

	border-radius: 10px;
	font-family: ${ff.opensans};

	.roomicon {
		img {
			width: 3.75rem;
			height: 3.75rem;
			border-radius: 50%;
			border: 2px solid #cad1dc36;
			object-fit: cover;
		}

		margin-right: 5px;
	}
`;

export const ChatInfo = styled.section`
	width: 100%;
	height: 4.5rem;
	border-radius: 5px;
	// background: #cad1dc;
	background: #cad1dc36;
	// background: #f8feff;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	padding-left: 15px;
	padding-right: 10px;

	.roomTitle {
		font-size: 1.25rem;
		font-weight: 700;
	}

	.lastMessage {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		// background: red;
		width: 100%;

		font-size: 0.8rem;

		.lastMessage_content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;

			.owner {
				font-weight: 700;
			}

			.ownerText {
				font-style: italic;
			}
		}

		.lastMessage_time {
			font-size: 0.7rem;
			font-weight: 600;
		}
	}
`;
