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

	.room_container{
		background: blue;
		color: white;
		font-weight: 700;
		padding: 2px;
		margin: 10px 2px;
		text-align: center;
		border-radius: 5px;
		letter-spacing: 1px;
	}
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

		h5{
			text-align: center;
			margin: 0;
			padding: 3px 0;
		}
	}

	.content {
		border: 2px solid black;
		height: calc(100% - 31px);
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
	height: 50%;
	width: 100%;
`;
export const UsersSection = styled.section`
	background: tomato;
	height: 50%;
	width: 100%;
`;
