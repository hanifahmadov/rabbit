/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../shared/store/design";

export const JoinRoomSection = styled(motion.div)`
	height: 100%;
	width: 100%;

	display: ${({ $backdrop }) => ($backdrop ? "none" : "flex")};
	justify-content: center;
	align-items: center;

	position: absolute;
	z-index: 50;
	left: 0;
	top: 0;

	background: transparent;

	.joinroom {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		color: rgba(255, 255, 255, 0.8);
		background: black;

		position: absolute;
		z-index: 100;

		font-family: "system-ui";
		font-weight: 600;
		font-size: 1rem;
		padding: 12px;

		border-radius: 10px;
		box-shadow: 0px 0px 30px -10px rgba(255, 255, 255, 0.1);

		.span_header {
			display: inline-block;
			width: 100%;
			background: rgba(255, 255, 255, 0.1);
			padding: 5px 10px;
			border-radius: 10px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			margin-bottom: 5px;
			text-align: center;
			font-weight: 700;
			font-size: 1.2rem;
			letter-spacing: 1px;
			text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
				0px 1px 10px rgba(255, 255, 255, 0.3);
		}

		.span_body {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			background: rgba(255, 255, 255, 0.1);
			border-radius: 10px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			text-align: center;
			padding: 10px 15px;

			button {
				margin-top: 15px;
				padding: 2px 10px;
				border-radius: 5px;
				font-weight: 600;
			}
		}
	}
`;
