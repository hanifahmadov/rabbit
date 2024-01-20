/* eslint-disable */
import { atom } from "recoil";

export const socketConState = atom({
	key: "socketConState",
	default: false,
});

export const curRoomState = atom({
	key: "curRoomState",
	default: null
});

export const roomsState = atom({
	key: "roomsState",
	default: [],
});

export const usersState = atom({
	key: "usersState",
	default: []
});

export const activeUsersState = atom({
	key: "activeUsersState",
	default: []
});

/* ACCOUNT DROPDOWN */
export const displayAccountState = atom({
	key: "displayAccountState",
	default: false,
});

/* CUSTOM CANVAS */
export const displayState = atom({
	key: "displayState",
	default: false,
});

export const displayRoomInfoState = atom({
	key: "displayRoomInfoState",
	default: false,
});

export const displayCreateRoomState = atom({
	key: "displayCreateRoomState",
	default: false,
});
