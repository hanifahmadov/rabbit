/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../shared/store/design";

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

	.side_navbar {
		position: relative;

		border: 4px solid black;

		padding: 0.5rem 0px;

		.createNewRoom_and_userAccount {
			// background: red;

			position: absolute;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			width: 100%;

			border-top: 4px solid black;
			padding-top: 10px;

			.room_details {
				border: 3px solid rgba(0, 0, 0, 0.3);
				border-radius: 50%;

				background: rgba(255, 255, 255, 0.4);
				padding: 5px;

				margin-bottom: 10px;
				cursor: pointer;

				span {
					img {
						width: 1.75rem;
						height: 1.75rem;
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

				width: 2.75rem;
				height: 2.75rem;

				margin-bottom: 10px;

				// overflow: hidden;

				span {
					display: flex;
					align-items: center;
					justify-content: center;


					width: 100%;
					height: 100%;

					font-size: 2rem;
					border-radius: 50%;


					line-height: 0px;
					font-wight: 700px;
					padding-bottom: 3px;
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
				height: 5rem;
				justify-content: center;
				align-items: center;

				border-top: 4px solid black;
			}
		}
	}

	.currentRoomDetailsSection {
		padding: 5px 0px;
		height: 100%;

		overflow: auto;

		border: 4px solid black;
		border-left: none;
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
	margin-left: 10px;

	padding: 0px 0px 0px 0px;
`;

export const MessagesSection = styled.div`
	height: 100%;
	width: 100%;

	background: ${clr.dark02};
	padding: 0px 10px 0rem 10px;

	overflow-y: auto;

	.spacer {
		height: 10rem;
	}

	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6) inset;
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
`;

export const RoomContainer = styled.div`


	background: transparent;

	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	
	padding: 0px;
	margin: 5px 10px;
	text-align: center;
	cursor: pointer;
	overflow: hidden;

	
	height: 4.5rem;


    border-radius: 8px;
	border: 3px solid rgba(255, 255, 255, .3);


    .icon {
        
        overflow: hidden;
		


        img {
            width: 3.5rem;
         
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 1);
            border-top-left-radius: 10%;
            border-top-right-radius: 10%;

        }
    }

    .name{
        margin-top: 2px;
        font-family: ${ff.notosans}
        display: inline-block;
        
        font-size: .8rem;
        font-weight: 700;
		background: white;
		width: 100%;
		color: black;


		text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
			0px -4px 10px rgba(255,255,255,0.3);
    }
`;

export const RoomDetailsContainer = styled.div`
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

		.room_icon {
			img {
				width: 100%;

			}
			button {
				width: 100%;
				padding: 5px;
				font-weight: 700;
				font-size: 0.9rem;
				font-family: system-ui;
				border:none;
				margin-top: 3px;

				&:active {
					background: rgba(255, 255, 255, 0.8);
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
			margin: 5px 0px 5px 0px;
			color: ${clr.white01};

		}

		.room_detail_content{

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

				.count, .owner_name, .format_time_ago {
					font-size: .9rem;
					font-weight: 700;
				}
			}

		}

	}

	.room_users {

		margin-top: .5rem;
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

			background: rgba(0, 0, 0, .3);

			span {
				display: inline-block;
				font-size: 0.82rem;
				font-weight: 600;
			}

			.user_img {
				border: 4px solid rgba(0, 0, 0, .3);
				border-radius: 50%;
				img {
					width: 2.75rem;
					height: 2.75rem;
					border-radius: 50%;
					border: 3px solid rgba(255, 255, 255, .4);

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
`;
