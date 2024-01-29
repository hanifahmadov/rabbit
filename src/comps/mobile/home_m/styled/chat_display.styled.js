/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../../../shared/store/design";
import bg from "../../../home/homeStore/logo/bg/bg06.jpeg";

export const ChatDisplaySection = styled.section`
	height: 100%;
	width: 100%;

	background: white;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	.curRoomHeader {
		height: 5rem;
		width: 100%;
		background: ${clr.white03};

		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;

		position: relative;

		.backArrow {
			margin-left: 0.75rem;
			padding: 5px;
			border-radius: 50%;
		}

		.roomIcon {
			margin-left: 1rem;
			img {
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				border: 2px solid #0055ff90;
			}
		}

		.roomName {
			margin-left: 1rem;
			font-size: 1.75rem;
			font-weight: 700;
			font-family: ${ff.opensans};
		}

		.defaultChatIcon {
			position: absolute;
			right: 20px;
		}
	}

	.curRoomBody {
		width: 100%;

		flex-grow: 1;

		background-image: url(${bg});
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1) inset;

		// padding: 20px 5px;

		overflow: scroll;


		.lastElementMobile{
			display: inline-block;
			height: 8rem;
			width: 100%;
			// background: red;
		}		
	}



	.curRoomFooter {

		width: 100%;
        height: auto;
        background: rgba(255, 255, 255, .2);
        backdrop-filter: blur(10px);
		-webkit-background: rgba(255, 255, 255, .2);
		-webkit-backdrop-filter: blur(10px);
        bottom: 0;
        position: absolute;
        padding: 0px 10px;

        display: flex;
		justify-content: space-between;
		align-items: center;
		// flex-direction: row;

	



		.input{
            display: block;
            width: 100%;
            max-width: 100%;   
            max-height: 6rem;
            margin: 10px 0px;
            padding: 7px 12px 7px 15px;
            overflow: auto;
            border: 3px solid rgba(255, 255, 255, .5);
            border-radius: 20px;
            line-height: 18px;
			letter-spacing: .5px;

            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box; 

            font-size: 1rem;
            font-family: ${ff.opensans};
            font-weight: 600;
            color: white;
           
        }

        .send{
			margin-left: 10px;
			margin-right: 5px;

			position: relative;
			transition: all .2s ease-in-out;
			opacity: ${({text}) => text ? '1' : '.5'};

            span {



				display: inline-block;
				background: white;
				position: absolute;
				height: 1.5rem;
				width: 1.5rem;
				right: 9px;
				bottom: 9px;
				z-index: -1;
				transition: all .2s ease-in-out;
				border-radius: 50%;

				opacity: ${({text}) => text ? '1' : '.5'};
            }

        }
	}
`;
