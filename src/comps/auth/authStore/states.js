/* eslint-disable */
import { atom } from "recoil";

export const userState = atom({
	key: "userState",
	default: {
		signedin: false,
		accessToken: null,
		_id: null,
		avatar: null,
		blocked: false,
		email: null,
		role: null,
	},
});

