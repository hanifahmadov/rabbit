/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import bg from "../../homeStore/logo/bg/bg06.jpeg";

export const BoardSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 100%;

	background-image: url(${bg});
	padding: 1rem;



    .messages {
        // background: red;

        height: 100%;
        margin-bottom: 15px;
        border-radius: 10px;
        overflow: hidden;
    }

`;

export const BoardForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	width: 100%;
	padding: 0px;

	position: relative;

	input {
		padding: 0.5rem;
		padding-left: 1rem;
		width: 100%;
        letter-spacing: .25px;
        font-family: system-ui;

		height: 4rem;
		background: black;
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
		right: 10px;
		bottom: 10px;
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

		${({ text }) =>
			text.length > 0 &&
			`
            border-color: white;
			span {
				color: white;
			}
        `}
	}
`;
