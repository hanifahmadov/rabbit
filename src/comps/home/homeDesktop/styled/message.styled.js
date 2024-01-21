/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const MessageSection = styled.section`
	display: flex;
	justify-content: ${({ owner }) => (owner ? "flex-end" : "flex-start")};
	align-items: center;

	.contentWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: ${({ owner }) => (owner ? "row-reverse" : "row")};

		font-size: 0.9rem;
		font-weight: 600;
		font-family: "system-ui";

		// background: rgba(255, 255,255, 0.1);
		// backdrop-filter: blur(10px);

		color: white;

		border-radius: 10px;
		padding: ${({ owner }) =>
			owner ? "1px 5px 4px 5px" : "1px 5px 4px 5px"};

		.avatarWrapper {
			display: inline-block;
			${({ owner }) =>
				owner ? "margin-left: 5px" : "margin-right: 5px"};
			overflow: hidden;

			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;

			border: 1px solid rgba(255, 255, 255, 0.5);
			border-radius: 50%;

			border-radius: 50%;

			img {
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 50%;
			}
		}

		.textWrapper {
			display: flex;
			flex-direction: column;
			word-wrap: break-word;
			padding: 3px 25px 3px 25px;
			position: relative;

			background: rgba(255, 255, 255, 0.05);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(5px);

			height: 100%;
			border-radius: 20px;
			border: 1px solid rgba(255, 255, 255, 0.2);

			.text {
				display: inline-block;
				max-width: 15rem;
				letter-spacing: .5px;
				font-family: system-ui;
			}

			.time_ago {
				display: block;
				width: 3rem;
				font-size: 0.65rem;
				font-weight: 400;
				font-style: italic;
				text-align: ${({ owner }) => (owner ? "left" : "right")};
				color: rgba(255, 255, 255, 0.5);
				position: relative;
				bottom: -1px;
			}
		}
	}
`;
