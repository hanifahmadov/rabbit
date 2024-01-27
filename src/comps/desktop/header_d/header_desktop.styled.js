/* eslint-disable */
import styled from "styled-components";

export const HeaderDesktopSection = styled.div`
	display: flex;

	width: 100%;
	


	.headerTitle {
		display: flex;
		justify-content: center;
		align-items: center;

		color: white;
		border-right: 3px solid white;

		padding: 6.5px 10px;
	
		font-size: 1.5rem;
		font-weight: 600;
		font-family: system-ui;
		letter-spacing: 1px;
	}

	.active_users {

		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;

		padding: 5px 20px;
		overflow: auto;

		div {
			border-radius: 5px;
			border: 3px solid rgba(255, 255, 255, 0.2);
			overflow: hidden;
			cursor: pointer;

			z-index: 10;
			margin: 0 6px;
			
			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				border-radius: 0px;
				z-index: -10;
			}
		}

		.active {
			border-color:rgba(0, 160, 255, 1);

			img {
				width: 2rem;
				height: 2rem;
				filter: blur(0px);
				z-index: -10;
			}
		}
	}
`;
