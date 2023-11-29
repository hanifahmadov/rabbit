/* eslint-disable */
import styled from "styled-components";
import { clr } from "../../shared/store/design";


export const HeaderContainer = styled.div`
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;


		width: 99.8% ;
		position: relative;
	
		z-index: 1;

		padding: 0.75rem 1rem 0.75rem 2rem;


		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(5px);

		.navbar-title {
			a {
				text-decoration: none;
				padding: 0px;

				h3 {
					padding: 0px;
					margin: 0px;
					color: white;
				}
			}
		}

		.navbar-links {
			display: flex;
			display: flex;
			justify-content: center;
			align-items: center;

			.links {
				display: flex;
				flex-direction: row;
				height: 100%;

				span {
					display: inline-block;
					height: 100%;
					margin: 0 0.5rem;
					font-weight: 600;

					a {
						display: inline-block;
						text-decoration: none;
						height: 100%;
						padding: 0.3rem 0.5rem;
						border-radius: 5px;
						font-size: 0.95rem;
						color: ${clr.white01};
					}

					a.active {
						background: rgba(255, 255, 255, 0.1);
						backdrop-filter: blur(10px);
						transition: all 0.25s ease-in-out;
					}
				}
			}
		}
	}
`;
