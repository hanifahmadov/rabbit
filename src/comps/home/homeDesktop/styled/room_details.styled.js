/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const RoomDetailsSection = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	width: 100%;
	padding: 0px;

	.rmDetailsHeader {
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
`;

export const AvatarUpdate = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
    position: relative;

	width: 100%;
	padding: 8px 10px;
    
	img {
		width: 100%;
		height: 14rem;
		border-radius: 5px;
		border: 2px solid rgba(255, 255, 255, 0.5);
	}

    .uploadedFileName {
       
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        height: 11rem;
        background: rgba(0, 0, 0, .8);
        top: 1rem;
        left: 12px;
        right: 12px;
        color: white;
        font-weight: 700;
        transition: all 4s ease-in-out;
    }

	form {
		position: relative;
		flex-direction: column;

		width: 100%;
		padding: 5px 0px;
		color: white;

		label {
			position: absolute;
			background: #1840d4;
			backdrop-filter: blur(10px);
			color: white;
			top: -27px;
			left: 2px;
			right: 2px;
			padding: 2px;
			font-weight: 600;
			cursor: pointer;
			border-bottom-left-radius: 2px;
			border-bottom-right-radius: 2px;
			transition: all 0.2s ease-in-out;
			&:hover {
				background: #07279c;
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
			margin-top: 0px;

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
	}
`;

export const CurrentRoomDetails = styled.section`
    color: white;
    width: 100%;
    border-bottom: 3px solid white;


    .detailsTitle {
        width: 100%;
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
        padding: 3px;
        font-family: system-ui;

        border-top: 3px solid white;
        border-bottom: 3px solid white;
        margin: 10px 0px 5px 0px;
    }

    .detailsContent {

        padding: 10px 0px 0px 0px;

        div {
            line-height: 15px;
            margin-bottom: 10px;

            span {
                display: block;
            }

            .text {
                font-size: 0.8rem;
                font-style: italic;
                color: rgba(255, 255, 255, .5);
                
            }

            .count,
            .owner_name,
            .format_time_ago {
                font-size: 0.9rem;
                font-weight: 700;

            }
        }
    }

`

export const CurrentRoomUsers = styled.section`


`


