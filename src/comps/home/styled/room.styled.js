/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../shared/store/design";

export const RoomSection = styled(motion.div)`

	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	
	padding: 0px;
	margin: 5px 10px;
	text-align: center;
	cursor: pointer;
	overflow: hidden;

	
	height: 4.5rem;
	width: 4rem;

	transition: all .2s ease-in-out;
    border-radius: 8px;
	border: 3px solid ${({ $active }) =>
        $active ? "rgba(255, 0, 0, .9)" : "rgba(255, 255, 255, .3)"};


    .icon {
        overflow: hidden;
		width: 100%;

        img {
            width: 100%;
			height: 50px;
         
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 1);
            border-top-left-radius: 10%;
            border-top-right-radius: 10%;

        }
    }

    .name{
        margin-top: 2px;
        font-family: ${ff.notosans}
        display: inline-block;
		justify-content: center;
		align-items: center;
		
        font-size: .8rem;
        font-weight: 700;
		background: white;
		width: 100%;
		color: black;


		text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
			0px -4px 10px rgba(255,255,255,0.3);



		span {
			display: block;
			justify-content: center;
			align-items: center;

		}
    }
`;
