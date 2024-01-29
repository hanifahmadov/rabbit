/* eslint-disable */
import React from "react";
import { useRecoilValue } from "recoil";

/* STYLED & APIs & IMG */
import { HomeMobileSection } from "./home_mobile.styled";
import { createNewRoomState, curRoomDisplayState, homeDisplayState } from "../store_m/states";

/* SUBS */
import { Footer } from "../footer_m/Footer";
import { Content } from "./subs/Content";
import { ChatDisplay } from "./subs/ChatDisplay";
import { CanvasMobile } from "./subs/CanvasMobile";

export const HomeMobile = ({}) => {
	const curRoomDisplay = useRecoilValue(curRoomDisplayState);
	const homeDisplay = useRecoilValue(homeDisplayState);
	const createNewRoom = useRecoilValue(createNewRoomState);
	return (
		<HomeMobileSection className='__homemobile__'>
			{/* ANIMATE CSS WHATSAPP STYLE */}
			{homeDisplay && (
				<section className='homeScreen'>
					<Content />
					<Footer />
				</section>
			)}
			{curRoomDisplay && (
				<section className='curRoomScreen'>
					<ChatDisplay />
				</section>
			)}
			{createNewRoom && <CanvasMobile/>}
		</HomeMobileSection>
	);
};

/* 


			



*/
