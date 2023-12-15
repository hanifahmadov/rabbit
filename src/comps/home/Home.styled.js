/* eslint-disable */
import styled from "styled-components";

export const HomeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	height: 100%;

	// TODO: remove these lines
	border: 5px solid red;
`;

export const LeftSection = styled.section`
	display: flex;
	align-items: end;
	flex-content: center;
	flex-direction: column;

	height: 100%;
	width: 20%;

	background: red;

	.header {
		border: 2px solid black;

		h5 {
			text-align: center;
			margin: 0;
			padding: 3px 0;
		}
	}

	.content {
		overflow: scroll;
		overflow: auto;
		height: 35.5rem;
		border-bottom: 20px solid red;

		position: relative;

		.room_container {
			background: ${(active) => (active ? "#4676e3" : "blue")};
			color: white;
			font-weight: 700;
			padding: 10px;
			margin: 10px 5px;
			text-align: center;
			border-radius: 5px;
			cursor: pointer;
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 1);
			border: 6px solid transparent;
	
		}

		.active {
			border: 6px solid red;
		}

	}
`;
export const RightSection = styled.section`
	display: flex;
	align-items: end;
	flex-direction: column;

	height: 100%;
	width: 80%;

	background: yellow;
`;

export const MessagesSection = styled.section`
	height: 100%;
	width: 100%;

	background: green;
`;

export const MessagesForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	width: 100%;

	button {
		width: 6rem;
		padding: 0.5rem;
	}

	input {
		flex: 1;
		padding: 0.5rem;
		padding-left: 1rem;

		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
			padding-left: 3px;
		}
	}
`;

export const RoomsSection = styled.section`
	background: silver;
	height: 100%;
	width: 100%;

	position: relative;


	.create_room {
		background: #3266cb;
		position: absolute;
		bottom: 0px;
		padding: 10px;
		width: 100%;
		border: 10px solid white;


		input, button {
			margin: 5px 2px;
			width: 100%;
			padding: 5px;
			border-radius: 5px;
		}
	}
`;
export const UsersSection = styled.section`
	background: tomato;
	flex: 1;
	width: 100%;
`;
