/* eslint-disable */
import styled from "styled-components";

export const FormCredentialsSection = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.section_email,
	.section_password {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		label {
			background: black;
			color: rgba(255, 255, 255, 0.8);
			padding: 5px 10px;
			font-weight: 600;
			font-size: 0.9rem;
			text: center;
			border: 1px solid rgba(255, 255, 255, 0.5);
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			border-bottom: none;
			text-shadow: 2px 2px 2px black;
		}

		input {
			width: 100%;
			font-weight: 500;
			padding: 8px 5px 8px 10px;
			border: 1px solid rgba(255, 255, 255, 0.5);
			text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
			background: rgba(255, 255, 255, 0.9);

			font-size: 0.95rem;
			border-radius: 3px;
			outline: none;
			transition: all 0.25s ease-in-out;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;

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
		text-shadow: 2px 2px 2px black;

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

		width: 80%;

		.section_email,
		.section_password,
		.section_confirmPassword { 

            margin-top: .5rem;

            label {
                padding: 2.5px 7px;
                font-weight: 700;
                font-size: 0.8rem;
                letter-spacing: .25px;
            }

            input {
				padding: 5px 5px 5px 5px;
				font-size: 0.8rem;
			}
		}


        button {
            padding: 2px;
            font-size: .9rem;
            font-weight: 700;
            letter-spacing: 1px;
            margin-top: 10px;
        }

	`}
`;
