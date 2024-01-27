/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../../../shared/store/design";
import bg from "../../../home/homeStore/logo/bg/bg06.jpeg";

export const CurRoomDisplaySection = styled.section`
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

            margin-left: .75rem;
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
		height: 100%;
		width: 100%;

		flex-grow: 1;

        background-image: url(${bg});
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1) inset;

        padding: 20px 5px;
	}

	.curRoomFooter {
		height: 5rem;
		width: 100%;
		background: yellow;
	}
`;
