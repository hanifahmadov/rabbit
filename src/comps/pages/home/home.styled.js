/* eslint-disable */
import styled from "styled-components";

export const HomeSection = styled.div`

    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;



	.chatboard, form {
		background: gray;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        border: 5px solid white;
	}



    .chatboard {
        background: rgba(255, 255, 255, 0.8);
        height: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        border: 5px solid white;
        border-bottom: none;

        padding: 1rem;
        overflow: scroll;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.45) inset;

        li {

            font-weight: 600;
            letter-spacing: 1px;
        }
    }

    input {
        width: 100%;
        padding: 0.45rem;
    }
    button {
        padding: 0.45rem;
        width: 5rem;
    }


`;
