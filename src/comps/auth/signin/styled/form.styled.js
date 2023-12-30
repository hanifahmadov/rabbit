/* eslint-disable */
import styled from "styled-components";

export const SigninForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 18rem;
	padding: 2rem 0rem;
    margin: 2rem 0px;

	.section_email,
	.section_password {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		margin: 8px 0px;
	}
`;

export const Label = styled.label`
	background: black;
	color: rgba(255, 255, 255, 0.8);
	padding: 5px 10px;
	font-weight: 700;
	font-size: 0.9rem;
	text: center;
`;

export const Input = styled.input`
	width: 100%;
	font-weight: 500;
	padding: 8px 5px 8px 10px;
	border: 1px solid rgba(0, 0, 0, 0.5);
	text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
	background: rgba(255, 255, 255, 1);

	font-size: 0.95rem;
	border-radius: 4px;
	outline: none;
	transition: all 0.25s ease-in-out;
	border-top-left-radius: 0px;
    font-weight: 600;

	&::placeholder {
		color: rgba(0, 0, 0, 0.3);
		font-size: 0.9rem;
		padding-left: 1px;
		transition: all 0.25s ease-in-out;
	}

	&:focus {
		&::placeholder {
			color: rgba(0, 0, 0, 0.15);
		}
	}
`;

export const Button = styled.button`
	width: 100%;
    border-radius: 5px;
	border: 3px solid rgba(255, 255, 255, 0.1);
	
	color: white;
	font-size: 1rem;
    padding: 5px 10px;
    margin-top: 2rem;

	font-weight: 700;
	cursor: pointer;

	transition: all 0.1s ease-in-out;
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
`;

