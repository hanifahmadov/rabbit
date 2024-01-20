/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const CustomCanvasSection = styled(motion.section)`
	height: 100%;
	overflow: hidden;
	position: absolute;
    left: -3px;

	border-right: 3px solid red;
    background: rgb(32 32 32);
    // backdrop-filer: blur(5px);

	// box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5) inset;

`;
