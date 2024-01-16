/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const InformantSection = styled(motion.div)`
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
			font-size: 0.8rem;
			margin-bottom: 0px;
		}


        .footer_signup {
    
            padding: 2px 4px;
    
            p {
                font-size: 0.8rem;
            }
    
            .login {
                font-size: .8rem;
            }
        }

	`}
`;
