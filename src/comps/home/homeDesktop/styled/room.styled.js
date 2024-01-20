/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import { ff } from "../../../shared/store/design";

export const RoomSection = styled(motion.div)`

	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	
	padding: 0px;
	margin: 2px 5px;
	text-align: center;
	cursor: pointer;
	overflow: hidden;

	
	height: 4.5rem;
	width: 4rem;

	padding: 2px;



	transition: all .2s ease-in-out;
    border-radius: 7px;
	border: 2px solid ${({ $active }) =>
		$active ? "rgb(0 189 255)" : "rgba(255, 255, 255, .3)"};

		// rgb(0 189 255)

    .icon {
        overflow: hidden;
		width: 100%;

        img {
            width: 100%;
			height: 45px;
			transition: all .2s ease-in-out;         
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 1);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
			
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

		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;


		text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
			0px -4px 10px rgba(255,255,255,0.3);



		span {
			display: block;
			justify-content: center;
			align-items: center;

		}
    }


	${({$active}) => $active ? `transform: scale(1);` : `transform: scale(.95);`}
`;
