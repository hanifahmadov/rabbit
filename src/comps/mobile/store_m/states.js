/* eslint-disable */
import { atom } from "recoil";

export const chatsState = atom({
	key: "chatsState",
	default: true,
});

export const settingsState = atom({
	key: "settingsState",
	default: false,
});


export const callsState = atom({
	key: "callsState",
	default: false,
});

export const homeDisplayState = atom({
	key: "homeDisplayState",
	default: true,
});

export const curRoomDisplayState = atom({
	key: "curRoomDisplayState",
	default: false,
});

export const createNewRoomState = atom({
	key: "createNewRoomState",
	default: false,
});








