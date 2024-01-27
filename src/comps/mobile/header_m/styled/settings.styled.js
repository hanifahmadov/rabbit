/* eslint-disable */
import styled from "styled-components";
import { ff } from "../../../shared/store/design";

export const SettingsSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	padding: 15px 30px;
	background: #f8feff;


	.title {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.8rem;
		font-weight: 700;
		font-family: ${ff.opensans};
		color: black;
	}

`;