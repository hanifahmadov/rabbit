/* eslint-disable */
import styled from "styled-components";
import { ff } from "../../shared/store/design";

export const FooterSection = styled.section`

	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;

	height: 6rem;
	width: 100%;
	background: rgba(255, 255, 255, .1);
	backdrop-filter: blur(10px);
	
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;


		background: rgba(255, 255, 255, .2);
		backdrop-filter: blur(5px);

		padding: 9px 15px;
		border-radius: 50%;

		width: 4.5rem;
		height: 4.5rem;




		span {
			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 0.9rem;
			font-family: ${ff.opensans};
			font-weight: 700;			
		}

		& *{
			pointer-events: none;
		}

	}

	.settings {
		padding: 10px 8px;
	}


`;
