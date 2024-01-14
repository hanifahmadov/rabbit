/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../../shared/store/design";

export const SignupContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 35rem;

	border: 7px solid black;
	border-radius: 10px;
	overflow: hidden;

	color: white;

	header {
		border-bottom: 7px solid black;
		width: 100%;
		background: rgba(255, 0, 0, 0.2);

		h3 {
			text-align: center;
			font-size: 1.7rem;
			font-weight: 700;
			padding: 12px;
			margin: 0;
			text-shadow: 2px 2px 2px black;
			letter-spacing: 1px;
			font-family: "system-ui";
		}
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
		width: 22rem;
		header {

			h3 {
				font-size: 1.5rem;
				font-weight: 600;
				padding: 5px;
			}
		}
	`}
`;

export const SignupForm = styled.form`
	width: 100%;
	padding: 2rem 0rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	.top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 100%;
		// height: 20rem;
	}

	button {
		width: 100%;
		border: 3px solid rgba(255, 255, 255, 0.1);
		padding: 5px 10px;
		border-radius: 5px;
		color: white;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.1s ease-in-out;

		margin-top: 15px;

		background: rgba(4, 145, 255, 0.5);

		&:hover {
			border: 3px solid rgba(255, 255, 255, 0.2);
		}

		&:active {
			background: rgba(4, 145, 255, 0.6);
			border-color: rgba(255, 255, 255, 0.1);
		}

		&:disabled,
		&[disabled] {
			opacity: 0.5;
			background: rgba(255, 255, 255, 0.2);
			pointer-events: none;
			cursor: not-allowed;
		}
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
			flex-direction: column;
			justify-content: space-between;
			padding: 0px 10px 5px 10px;

		`}
`;

export const FormAvatar = styled.div`
	width: 10rem;
	height: 10rem;
	background: rgba(0, 0, 0, 0.5);
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-bottom: 1rem;
	margin-right: 2rem;
	border: 4px solid rgba(255, 255, 255, 0.4);
	border-radius: 5px;

	position: relative;

	.label_avatar {
		width: 100%;
		cursor: pointer;
		background: rgb(0 93 160);
		padding: 3px;
		color: white;
		font-weight: 700;
		font-size: 0.8rem;
		transition: all 0.2s ease-in-out;
		text-shadow: 1px 1px 2px black;
		border-top: 3px solid gray;

		position: absolute;
		bottom: 0px;

		&:hover {
			background: rgb(0 81 139);
		}

		&:active {
			background: rgb(0 93 160);
		}
	}

	img {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -10;
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
		width: 7.5rem;
		height: 7.5rem;
		margin-right: 0rem;
		padding: 0;
		margin-top: 10px;
	`}
`;

export const FormCredentials = styled.div`
	width: 50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.section_email,
	.section_password,
	.section_confirmPassword {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		label {
			background: black;
			color: rgba(255, 255, 255, 0.8);
			padding: 5px 10px;
			font-weight: 700;
			font-size: 0.9rem;
			text: center;
		}

		img {
			width: 1.25rem;
			height: 1.25rem;
			border-radius: 50%;
			position: absolute;
			top: 2px;
			left: 2px;
		}

		input {
			width: 100%;
			font-weight: 500;
			padding: 8px 5px 8px 10px;
			border: 1px solid rgba(0, 0, 0, 0.5);
			text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
			background: rgba(255, 255, 255, 0.9);

			font-size: 0.95rem;
			border-radius: 4px;
			outline: none;
			transition: all 0.25s ease-in-out;
			border-top-left-radius: 0px;

			&::placeholder {
				color: rgba(0, 0, 0, 0.4);
				font-size: 0.9rem;
				padding-left: 1px;
				transition: all 0.25s ease-in-out;
			}

			&:focus {
				&::placeholder {
					color: rgba(0, 0, 0, 0.15);
				}
			}
		}
	}

	.section_password,
	.section_confirmPassword {
		margin-top: 1rem;
	}

	${({ theme }) =>
		theme.device.mobile &&
		`

		width: 85%;

		.section_email,
		.section_password,
		.section_confirmPassword { 


			input {
				padding: 7px 7px 7px 10px;
				font-size: .8rem;
			}
		}



	`}
`;

export const Information = styled(motion.div)`
	position: relative;

	width: 100%;

	background: transparent;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-top: 7px solid black;

	.title {
		display: block;
		width: 100%;
		top: 0;
		background: rgba(255, 0, 0, 0.2);
		font-weight: 700;
		font-size: 1rem;
		text-align: center;
		padding: 3px;
		margin-bottom: 15px;

		border-bottom: 7px solid black;
	}

	.content {
		text-align: center;
		font-weight: 600;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 10px;
		padding: 0 5px;
		height: 9rem;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div {
			margin: 5px 0px;
		}
	}

	.footer_signup {
		width: 100%;
		background: black;

		display: flex;
		justify-content: center;
		align-items: center;

		border-top: 7px solid black;
		padding: 10px;

		p {
			width: 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 0.95rem;
			font-weight: 600;
			color: rgba(255, 255, 255, 0.9);
			font-style: italic;
			margin: 0;
		}

		.login {
			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 1rem;
			margin-left: 8px;
			color: rgba(4, 145, 255);
			background: rgba(255, 255, 255, 0.1);
			padding: 2px 8px;
			border-radius: 5px;
			cursor: pointer;
			font-style: normal;
			font-weight: 700;
			text-shadow: 1px 1px 2px black;

			&:hover {
				background: rgba(255, 255, 255, 0.15);
			}
		}
	}

	${({ theme }) =>
		theme.device.mobile &&
		`

		.title {
			margin-bottom: 0px;
		}

		.content {
			height: 6rem;
			font-size: 0.85rem;
			margin-bottom: 0px;
		}

	`}
`;

// export const RevealPasswordSpan = styled.span`
// 	//: display
// 	display: inline;

// 	//: position
// 	position: absolute;
// 	bottom: 21px;
// 	right: 5px;

// 	//: sizing
// 	width: 3rem;
// 	padding: 2px 5px;

// 	//: color
// 	color: black;

// 	//: text
// 	text-align: center;
// 	font-size: 0.8rem;
// 	font-weight: 700;

// 	//: border, shadows
// 	border: 1px solid black;
// 	border-radius: 3px;

// 	//: others
// 	cursor: pointer;

// 	//: pesudo
// 	&:active {
// 		color: white;
// 		background: black;
// 	}
// `;
