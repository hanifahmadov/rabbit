/* eslint-disable */
import { atom } from "recoil";

export const displayState = atom({
	key: "displayState",
	default: 0,
});

export const activeState = atom({
	key: "activeState",
	default: 0,
});

export const darkmodeState = atom({
	key: "darkmodeState",
	default: true
});

export const deviceState = atom({
	key: "deviceState",
	default: {
		mobile: null, //: 550
		tablet: null, //: 768,
		laptop: null, //: 1000
		desktop: null, //: 1200
	},
});


export const displayNavbarAccountState= atom({
	key: "displayNavbarAccountState",
	default: false
});

export const modalState= atom({
	key: "modalState",
	default: false
});




