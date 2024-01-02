/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../shared/store/design";

export const MessageContainer = styled.div`


    display: flex;
    justify-content: ${({pos}) => pos ? 'flex-end' : 'flex-start'};
    align-items: center;
 

    .main_wrapper {

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: ${({pos}) => pos ? 'row-reverse' : 'row'};


        background: black;
        font-size: .9rem;
        font-weight: 600;
        font-family: "system-ui";
        margin: 3px;
        color: white;

        border-radius: 10px;

        ${({pos}) => pos ? ' padding: 6px 5px 4px 8px' : 'padding: 6px 8px 4px 5px'};
       
    }


   

    .owner {
        right: 0px;
    }

    .avatar {
        display: inline-block;
        

        ${({pos}) => pos ? 'margin-left: 8px' : 'margin-right: 8px'};
        border-radius: 10px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 2px solid rgba(255, 255, 255, 0);
        

        img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 10px;
        }
    }

    .section_text_timeago {

        word-wrap: break-word;
        padding: 0 2px;
        position: relative;

        .text{
            display: inline-block;
            max-width: 10rem;
           
        }

        .time_ago {

            display: block;
            font-size: 0.65rem;
            font-weight: 400;
            font-style: italic;
            text-align: ${({pos}) => pos ? 'left' : 'right'};
            color: rgba(255, 255, 255, 0.5);

        }

    }



  
    
`;
