/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../shared/store/design";

export const MessageContainer = styled.div`


    display: flex;
    justify-content: ${({pos}) => pos ? 'flex-end' : 'flex-start'};
    align-items: center;

    .text {
        background: black;
        display: block;
        font-size: 1rem;
        font-weight: 600;
        font-family: "system-ui";
        margin: 3px;
        color: white;
        padding: 10px 10px 10px 5px;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .owner {
        right: 0px;
    }

    .avatar {
        display: inline-block;
        margin-right: 8px;
        border-radius: 50%;
        overflow: hidden;

        display: block;
        

        img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
        }
    }

    .time_ago {

        display: block;
        font-size: 0.8rem;
        font-weight: 400;
        font-style: italic;

        color: rgba(255, 255, 255, 0.5);
    }



  
    
`;
