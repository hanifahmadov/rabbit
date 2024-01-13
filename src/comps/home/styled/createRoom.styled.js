/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { clr, ff } from "../../shared/store/design";

export const CreateRoomSection = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;

	width: 100%;

	padding: 0 10px;

	.header {
		width: 100%;

		h5 {
			width: 100%;
			font-size: 1.2rem;
			font-weight: 700;
			text-align: center;
			padding: 10px;
			font-family: system-ui;

			border: 4px solid black;
			margin-bottom: 5px;
			color: white;
		}
	}

	form {
		width: 100%;

		.selected_files {
			width: 100%;
			height: 13rem;
			border: 3px solid black;
			margin: 5px 0px;

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			color: white;

			position: relative;

			.img {
				width: 100%;
				height: 100%;
			}

			.filename {
				position: absolute;

				background: rgba(0, 0, 0, 0.8);
				width: 100%;

				color: rgba(255, 255, 255, 1);
				line-height: 160px;

				font-size: 1rem;
				font-weight: 700;
			}
		}

		.info_about_image {
			margin: 10px 2px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: white;

			position: relative;

			img {
				width: 1rem;
				height: 1rem;

				position: absolute;
				left: 3px;
				top: 4px;
			}

			span {
				width: 100%;
				display: inline-block;
				padding: 10px;
				border-radius: 7px;
				font-family: ${ff.roboto};
				letter-spacing: 0px;
				background: black;
				font-weight: 700;
				text-align: left;
				color: rgba(255, 255, 255, 0.9);
				text-align: center;
			}
		}

		.select_file {
			width: 100%;
			border: 3px solid rgba(255, 255, 255, 0.1);
			padding: 5px 10px;
			border-radius: 5px;
			color: white;
			font-size: 0.9rem;
			font-weight: 600;
			cursor: pointer;
			transition: all 0.1s ease-in-out;

			margin-bottom: 2rem;

			background: rgba(4, 145, 255, 0.5);

			&:hover {
				border: 3px solid rgba(255, 255, 255, 0.2);
			}

			&:active {
				background: rgba(4, 145, 255, 0.6);
				border-color: rgba(255, 255, 255, 0.1);
			}
		}

		#newroomInput {
			padding: 1.1rem;
			width: 100%;

			height: 1rem;
			background: ${clr.dark01};
			color: white;
			border-radius: 3px;
			border: 2px solid rgba(255, 255, 255, 0.4);

			&::placeholder {
				color: rgba(255, 255, 255, 0.2);
				padding-left: 1px;
			}
		}

		button {
			width: 100%;
			border: 3px solid rgba(255, 255, 255, 0.1);
			padding: 5px 10px;
			border-radius: 5px;
			color: white;
			font-size: 0.9rem;
			font-weight: 600;
			cursor: pointer;
			transition: all 0.1s ease-in-out;
			disabled: true;

			margin-top: 5px;

			background: rgba(255, 0, 0, 0.4);

			&:hover {
				background: rgba(255, 0, 0, 0.3);
			}

			&:active {
				border-color: rgba(255, 255, 255, 0.2);
			}

			span {
				display: inline-block;
			}

			&:disabled,
			&[disabled] {
				opacity: 0.3;
				cursor: not-allowed;
				pointer-events: none;
			}
		}

		.newRoomName_label_wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			position: relative;

			.info_label {
				position: absolute;
				top: 7px;
				left: 6px;

				img {
					width: 1rem;
					height: 1rem;
				}
			}

			label {
				width: 100%;
				border: 3px solid rgba(255, 255, 255, 0.1);
				border-radius: 10px;
				color: white;
				font-size: 0.9rem;
				font-weight: 700;
				cursor: pointer;
				transition: all 0.1s ease-in-out;
				margin: 5px 0px;
				padding: 10px 10px;
				background: black;
				color: rgba(255, 255, 255, 0.9);
			}
		}
	}
`;
