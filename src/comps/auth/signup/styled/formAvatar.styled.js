/* eslint-disable */
import styled from "styled-components";

export const FormAvatarSection = styled.div`
	width: 10rem;
	height: 10rem;
	background: rgba(0, 0, 0, 0.5);
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


	border-radius: 5px;
    border: 2px solid white;

    margin-right: 2.5rem;


	position: relative;

	.label_avatar {
		width: 100%;
		cursor: pointer;
		background: rgb(0 93 160);
		padding: 3px;
		color: white;
		font-weight: 700;
		font-size: 0.8rem;
		transition: all 0.2s ease-in-out;
		text-shadow: 1px 1px 2px black;
		border-top: 3px solid white;

        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

		position: absolute;
		bottom: 0px;

		&:hover {
			background: rgb(0 81 139);
		}

		&:active {
			background: rgb(0 93 160);
		}
	}

	img {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -10;
	}

	${({ theme }) =>
		theme.device.mobile &&
		`
		width: 7rem;
		height: 7rem;
		padding: 0px;
        margin: 0px;
        margin-top: .5rem;
        border: 2px solid white;

	`}
`;