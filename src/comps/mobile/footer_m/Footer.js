/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilState } from "recoil";

/* STATES & STYLED & API & HELPERS */
import { FooterSection } from "./footer.styled";

import { callsState, chatsState, settingsState } from "../store_m/states";
import { callsIcon, chatsIcon, settingsIcon } from "../store_m/helpers";

/* SUBS */

export const Footer = () => {
	const [calls, setCalls] = useRecoilState(callsState);
	const [chats, setChats] = useRecoilState(chatsState);
	const [settings, setSettings] = useRecoilState(settingsState);

	const handleFooterClick = (e) => {
		const val = e.target.className;

		console.log(val)

		if (val === "calls") {
			setCalls(true);
			setChats(false);
			setSettings(false);
		}

		if (val === "chats") {
			setChats(true);
			setCalls(false);
			setSettings(false);
		}

		if (val === "settings") {
			setSettings(true);
			setChats(false);
			setCalls(false);
		}
	};
	return (
		<FooterSection onClick={handleFooterClick}>
			<section className='calls'>
				<span>
					<img src={callsIcon} alt='' />
				</span>
				<span>Calls</span>
			</section>

			<section className='chats'>
				<span>
					<img src={chatsIcon} alt='' />
				</span>
				<span>Chats</span>
			</section>

			<section className='settings'>
				<span>
					<img src={settingsIcon} alt='' />
				</span>
				<span>Settings</span>
			</section>
		</FooterSection>
	);
};
