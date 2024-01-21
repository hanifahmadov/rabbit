/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const CustomCanvasSection = styled(motion.section)`
	height: 100%;
	overflow: hidden;
	position: absolute;
	left: -3px;

	border-right: 3px solid red;
	z-index: 5;

	background: rgba(255, 255, 255, .1);
	backdrop-filter: blur(10px);
	box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.5) inset;
`;
