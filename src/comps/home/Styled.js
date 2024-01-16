/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../shared/store/design";
import { motion } from "framer-motion";

export const HomeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	height: 100%;
	overflow-y: hidden;

	// TODO: remove these lines
	// border: 5px solid red;

	padding-top: 10px;
`;

export const LeftSection = styled.section`
	display: flex;
	flex-content: center;
	flex-direction: row;

	height: 100%;
	background: ${clr.dark02};

	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;

	position: relative;

	.side_navbar {
		display: flex;
		flex-direction: column;
		position: relative;

		border: 4px solid black;

		.section_rooms {
			background: black;
			padding: 5px 0px;

			color: white;
			font-weight: 700;
			font-size: 1.2rem;
			text-align: center;
			margin-bottom: 5px;
		}

		.rooms {
			flex: 1;

			margin-bottom: 0px;
			overflow: auto;
			justify-content: center;
			background: black;
			padding-top: 3px;
		}

		.createNewRoom_and_userAccount {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-direction: column;

			// background: red;

			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;

			width: 100%;
			height: ${({ theme }) => (theme.device.mobile ? "13rem" : "14rem")};

			border-top: 4px solid black;

			.room_details {
				border: 3px solid rgba(0, 0, 0, 0.3);
				border-radius: 50%;

				background: rgba(255, 255, 255, 0.4);
				padding: 5px;
				cursor: pointer;

				span {
					img {
						width: 2rem;
						height: 2rem;
					}
				}

				&:active {
					border-color: rgba(255, 255, 255, 1);
					color: white;
					transition: all 0.25s;
				}
			}

			.create_new_room {
				border: 3px solid rgba(0, 0, 0, 0.3);
				border-radius: 50%;

				background: rgba(255, 255, 255, 0.4);

				cursor: pointer;
				transition: all 0.25s;

				padding: 5px;

				// overflow: hidden;

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

			.userAccount {
				width: 100%;
				// background: green;

				display: flex;
				justify-content: center;
				align-items: center;

				padding-top: 0.5rem;

				border-top: 4px solid black;
				z-index: 100;
			}
		}
	}

	.currentRoomDetailsSection {
		padding: 5px 0px;
		height: 100%;

		overflow: auto;
		position: relative;

		border: 4px solid black;
		border-left: none;

		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;

		${({ theme }) =>
			theme.device.mobile &&
			`
			position: absolute;
			z-index: 15;
			left: 5rem;
			background: rgba(20, 20, 20, 1);
		
		`}
	}
`;

export const RightSection = styled.section`
	display: flex;
	align-items: end;
	flex-direction: column;

	box-siz: border-box;
	height: calc(100%);

	width: 100%;

	border: 4px solid black;
	margin-left: ${({ theme }) => (theme.device.mobile ? "0px" : "10px")};

	padding: 0px 0px 0px 0px;
	transition: filter 0.5s ease-in-out;

	${({ $display }) =>
		$display
			? `
			filter: brightness(50%) blur(4px);
			pointer-events: none;
		`
			: `
			filter: brightness(100%) blur(0px);
			pointer-events: auto;
		`}
`;

export const MessagesSection = styled(motion.div)`
	height: 100%;
	width: 100%;

	background: transparent;
	padding: 0px 10px 0rem 10px;

	overflow-y: ${({ $backdrop }) => ($backdrop ? "auto" : "hidden")};
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;
	position: relative;

	.autoscrollRef {
		height: 7rem;
	}

	.watermark {
		background: transparent;
		color: black;
		font-size: 6rem;
		font-weight: 700;
		letter-spacing: 2px;
		height: 100%;
		width: 100%;
		opacity: 0.2;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;

		position: fixed;
		top: 0;
		bottom:0;
		left: 0;
		right: 0;
		
		z-index: -100;
	}
`;

export const MessagesForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	width: 100%;
	padding: 10px 20px 10px 20px;

	// background: #243d76;

	position: relative;

	border-top: 4px solid black;

	input {
		padding: 1rem;
		width: 100%;

		height: 4rem;
		background: ${clr.dark01};
		color: white;
		border-radius: 10px;
		border: 2px solid rgba(255, 255, 255, 0.4);

		&::placeholder {
			color: rgba(255, 255, 255, 0.2);
			padding-left: 3px;
		}
	}

	button {
		height: 2.5rem;
		width: 2.5rem;
		position: absolute;
		right: 30px;
		bottom: 20px;
		border-radius: 50%;
		background: transparent;
		border: 2px solid rgba(255, 255, 255, 0.5);
		box-shadow: 0px 1px 18px 5px rgb(0, 0, 0, 20%);

		span {
			font-size: 1.5rem;
			position: relative;
			bottom: 1px;
			left: 1px;
			color: rgba(255, 255, 255, 0.5);
		}

		&: active {
			border-color: white;

			span {
				color: white;
			}
		}
	}

	${({ theme }) =>
		theme.device.mobile &&
		`

		input {
			padding: .25rem;
			padding-left: 1rem;
			height: 3rem;

			&::placeholder {
				padding-left: 10px;
				font-size: .8rem;
				opacity: .5;
			}
		}
	
	
		button {
			display: none;
		}
	
	`}
`;

export const RoomDetailsContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;

	margin: 0 10px;

	.room_header {
		width: 100%;
		font-size: 1.2rem;
		font-weight: 700;
		text-align: center;
		padding: 3px;
		font-family: system-ui;

		border: 4px solid black;
		margin-bottom: 5px;
		color: ${clr.white01};
	}

	.room_details {
		width: 100%;

		.room_icon {
			img {
				width: 100%;
				border: 3px solid rgba(255, 255, 255, 0.1);
			}

			form {
				width: 100%;

				button {
					width: 100%;
					padding: 5px 0px;
					font-weight: 700;
					font-size: 0.9rem;
					font-family: system-ui;
					margin-top: 5px;

					background: rgba(255, 0, 0, 0.4);
					color: white;
					border: 3px solid rgba(255, 255, 255, 0.1);

					&:active {
						background: rgba(255, 0, 0, 0.3);
					}

					&:disabled,
					&[disabled] {
						opacity: 0.3;
						pointer-events: none;
					}
				}
			}
		}

		.room_detail_header {
			width: 100%;
			font-size: 1.2rem;
			font-weight: 700;
			text-align: center;
			padding: 3px;
			font-family: system-ui;

			border: 3px solid black;
			margin: 20px 0px 5px 0px;
			color: ${clr.white01};
		}

		.room_detail_content {
			border: 3px solid black;
			padding: 10px 0px 0px 0px;

			div {
				line-height: 15px;
				margin-bottom: 10px;
				color: ${clr.white01};

				span {
					display: block;
					color: ${clr.white01};
				}

				.text {
					font-size: 0.8rem;
					font-style: italic;
				}

				.count,
				.owner_name,
				.format_time_ago {
					font-size: 0.9rem;
					font-weight: 700;
				}
			}
		}
	}

	.room_users {
		margin-top: 0.5rem;
		width: 100%;
		.header {
			font-size: 1.2rem;
			font-weight: 700;
			text-align: center;
			padding: 3px;
			font-family: system-ui;

			border: 3px solid black;
			color: ${clr.white01};
		}

		.user {
			cursor: pointer;
			border-radius: 7px;
			margin: 5px 0px;
			padding: 5px;
			display: flex;
			width: 100%;
			align-items: center;

			border: 3px solid black;

			background: rgba(0, 0, 0, 0.3);

			span {
				display: inline-block;
				font-size: 0.82rem;
				font-weight: 600;
			}

			.user_img {
				border: 4px solid rgba(0, 0, 0, 0.3);
				border-radius: 50%;
				img {
					width: 2.75rem;
					height: 2.75rem;
					border-radius: 50%;
					border: 3px solid rgba(255, 255, 255, 0.4);
				}
			}

			.user_details {
				margin-left: 12px;
				display: flex;
				flex-direction: column;
				color: ${clr.white01};
				width: 5rem;

				.username {
					font-size: 0.85rem;
					font-weight: 600;
				}

				.joined {
					font-size: 0.8rem;
					font-weight: 400;
					font-style: italic;

					color: rgba(255, 255, 255, 0.5);
				}
			}
		}
	}

	.update_roomDetails {
		width: 100%;
		position: sticky;
		bottom: -6px;

		display: none;

		button {
			width: 100%;
			padding: 2px 0px;
			font-weight: 700;
			font-size: 0.9rem;
			font-family: system-ui;
			margin-top: 5px;

			background: rgb(0 42 130);
			border: 3px solid rgba(255, 255, 255, 0.1);
			color: white;
			cursor: pointer;

			&:active {
				background: rgb(2 45 145);
				border-color: rgba(255, 255, 255, 0.13);
			}
		}
	}
`;
