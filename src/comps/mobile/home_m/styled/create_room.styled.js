/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const CreateRoomSection = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;

	width: 100%;
	height: 100%;

	padding: 0px;



	.createRoomTitle {
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

		background: #36495f;
	}

	form {
		width: 100%;
		// height: 32rem;


		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		
	}
`;

export const FileOnDisplay = styled.section`
	width: 100%;
	height: 16rem;
	border: 3px solid black;
	margin: 5px 0px;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	border: 0px solid rgba(255, 255, 255, 0.5);

	color: white;

	position: relative;

	img {
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}

	.filename {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;

		width: 100%;
		height: 100%;

		background: rgba(0, 0, 0, 0.8);
		color: rgba(255, 255, 255, 1);

		font-size: 1rem;
		font-weight: 700;
	}
`;

export const FileInstruction = styled.section`
	margin: 5px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
	width: 100%;

	position: relative;
	border: 3px solid rgba(0, 0, 0, 1);
	border-radius: 5px;

	img {
		width: 1rem;
		height: 1rem;

		position: absolute;
		left: 0px;
		top: 0px;
	}

	span {
		width: 100%;
		display: inline-block;
		padding: 10px;
		border-radius: 3px;
		font-family: system-ui;
		letter-spacing: 0px;
		font-weight: 600;
		text-align: left;
		color: white;
		text-align: center;
		background: black;
	}
`;

export const FileInput = styled.label`
	width: 100%;
	border: 3px solid rgba(255, 255, 255, 0.1);
	padding: 5px;
	border-radius: 5px;
	color: white;
	font-size: 0.9rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.1s ease-in-out;

	background: rgba(4, 145, 255, 0.9);

	&:hover {
		border: 3px solid rgba(255, 255, 255, 0.2);
	}

	&:active {
		background: rgba(4, 145, 255, 1);
		border-color: rgba(255, 255, 255, 0.1);
	}
`;

export const FilenameInstruction = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
	border-radius: 5px;
	margin-top: 1rem;

	.info_label {
		position: absolute;
		top: 3px;
		left: 3px;

		img {
			width: 1rem;
			height: 1rem;
		}
	}

	label {
		width: 100%;
		border: 3px solid rgba(255, 255, 255, 0.05);
		border-radius: 5px;
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
`;

export const FilenameInput = styled.input`
	padding: 1.5rem 1.5rem 1.5rem 1rem;
	width: 100%;

	height: 1.5rem;
	background: rgba(0, 0, 0, 1);
	color: white;
	font-weight: 600;
	border-radius: 5px;
	border: 2px solid rgba(255, 255, 255, 0.5);
	letter-spacing: .5px;
	text-transform: capitalize;

	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
		padding-left: 1px;
		font-size: .9rem;
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	border: 3px solid rgba(255, 255, 255, 0.1);
	padding: 10px 10px;
	border-radius: 5px;
	color: white;
	font-size: 1.1rem;
	letter-spacing: .5px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.1s ease-in-out;


	margin-top: 5rem;

	background: rgba(255, 0, 0, .8);

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
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}
`;
