/* eslint-disable */
import { atom } from "recoil";

export const activeState = atom({
	key: "activeState",
	default: 0,
});

export const darkmodeState = atom({
	key: "darkmodeState",
	default: true,
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



export const modalState = atom({
	key: "modalState",
	default: false,
});


// export const roomsDefault = atom({
// 	key: "roomsDefault",
// 	default: [
// 	//: rooms properties
// 	// 	{
// 	// 		id: 8080,
// 	// 		name: "general",
// 	// 		owner: "system",
// 	// 		joinedusers: [],
// 	// 		createdAt: new Date(),
// 	// 		messages: [],
// 	// 	},
// 	],
// });



export const messageDefault = atom({
	key: "messageDefault",
	default: {
		messageId: null,
		messageText: null,
		owner: null,
		createdAt: null,
		// reaction: { likes: 0, dis: 0, funny: 0 }
	},
});



