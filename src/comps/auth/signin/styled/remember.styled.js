/* eslint-disable */
import styled from "styled-components";

export const RememberSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: flex-center;
	align-items: center;

	width: 100%;
	padding: 8px 4px;
	margin: 7px 0px;

	background: ${({remember}) => remember ? '#220000' : 'black'};
	border-radius: 5px;
	
	transition: all 0.3s ease-in-out;
   
	input {

		cursor: pointer;
		// transform: scale(1.05);
	}

	.rememberme_text {
		margin-left: 5px;
		padding: 2px 5px;
		font-weight: 700;
		font-size: .9rem;
		text: center;
        color:  ${({remember}) => remember ? 'white' : 'rgba(255, 255, 255, 0.5)'};
        transition: color 0.3s ease-in-out;
        letter-spacing: .25px;
        text-shadow: 2px 2px 2px black;

	}


`;
