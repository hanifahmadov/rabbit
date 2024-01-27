/* eslint-disable */
import styled from "styled-components";

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	width: 100%;
	padding: 0px;
	margin: 0px;

	background: black;
	border-bottom: 3px solid white;

	${({ theme }) => theme.device.mobile && "border-bottom: none;"};
`;
