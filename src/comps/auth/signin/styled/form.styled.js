/* eslint-disable */
import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 18rem;
    margin: 2rem 0rem;


	${({theme}) => theme.device.mobile && `
		margin: 1rem 0rem;
	`}
`;
