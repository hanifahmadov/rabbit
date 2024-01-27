/* eslint-disable */
import React from "react";
import { useRecoilValue } from "recoil";

/* STYLED & APIs & IMG */
import { HomeMobileSection } from "./home_mobile.styled";
import { curRoomDisplayState, homeDisplayState } from "../store_m/states";

/* SUBS */
import { Footer } from "../footer_m/Footer";
import { Content } from "./subs/Content";
import { CurRoomDisplay } from "./subs/CurRoomDisplay";

export const HomeMobile = ({}) => {
	const curRoomDisplay = useRecoilValue(curRoomDisplayState);
	const homeDisplay = useRecoilValue(homeDisplayState);
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
					<CurRoomDisplay />
				</section>
			)}
		</HomeMobileSection>
	);
};

/* 


			



*/
