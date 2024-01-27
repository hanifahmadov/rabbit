/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilValue } from "recoil";

/* STATES & STYLED & API & HELPERS */
import { callsState, chatsState, homeDisplayState, settingsState } from "../store_m/states";
import { HeaderMobileSection } from "./header_mobile.styled";

/* SUBS */
import { Chats } from "./subs/Chats";
import { Calls } from "./subs/Calls";
import { Settings } from "./subs/Settings";

export const HeaderMobile = () => {
	const calls = useRecoilValue(callsState);
	const chats = useRecoilValue(chatsState);
	const settings = useRecoilValue(settingsState);

	const homeDisplay = useRecoilValue(homeDisplayState);

	return (
		<HeaderMobileSection className='__headermobile__'>
			{homeDisplay && (
				<>
					{calls && <Calls />}
					{chats && <Chats />}
					{settings && <Settings />}
				</>
			)}
		</HeaderMobileSection>
	);
};

/* <div className='active_users'>
				{users.length &&
					users.map((user, index) => {
						return (
							<div
								key={index}
								className={
									online.includes(user._id) ? "active" : ""
								}
							>
								<img src={apiUrl + "/" + user.avatar} />
							</div>
						);
					})}
			</div> */
