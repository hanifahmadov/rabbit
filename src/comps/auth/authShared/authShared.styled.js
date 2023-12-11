/* eslint-disable */
import styled from "styled-components";

export const InputContainer = styled.section`
    width: 100%;
	color: black;

	margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
    width: 100%;
	font-weight: 500;
	color: black;
	padding-left: 2px;

`;

export const StyledInput = styled.input`
    display: flex;
	width: 100%;
	font-weight: 500;
	padding: 8px 5px 8px 10px;
	border: 1px solid rgba(0, 0, 0, 0.5);
	text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
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
`;

export const StyledButton = styled.button`
	margin-top: 1rem;
	font-weight: 600;
	font-size: 1rem;
    width: 100%;
`;


export const FooterSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	color: black;

	margin-top: 3rem;

	p {
		padding: 0;
		margin: 0;
		text-align: center;
		font-weight: 500;


		a {
			color: red;
			text-decoration: none;
			font-weight: 600;
			margin-left: 5px;
		}
	}
`;
