/* eslint-disable */
export const desktopCanvasVariant = {
	initial: {
		opacity: 1,
		width: "0rem",
		borderRight: " 3px solid white",
		backgroundColor: "rgb(32 32 32)",
		left: "-3px",
	},

	animate: {
		opacity: 1,
		width: "15rem",
		borderRight: " 3px solid white",
		backgroundColor: "rgb(32 32 32)",
		left: "0px",

		transition: {
			duration: 0.5,
		},
	},

	exit: {
		opacity: 1,
		width: "0rem",
		borderRight: " 3px solid white",
		backgroundColor: "rgb(32 32 32)",
		left: "-3px",
		transition: {
			delay: 0.2,
			duration: 0.5,
		},
	},
};

export const createRoomVariant = {
	initial: {
		opacity: 0,
	},

	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},

	exit: {
		opacity: 0,
		transition: {
			delay: 0,
		},
	},
};

export const roomSettingMobileVariants = {
	initial: {
		opacity: 0,
		width: "0rem",
	},

	animate: {
		opacity: 1,
		width: "16rem",
		transition: {
			duration: 0.5,
			opacity: {
				delay: 0.3,
			},
		},
	},

	exit: {
		opacity: 0,
		width: "0rem",
		transition: {
			width: {
				delay: 0.3,
				duration: 0.5,
			},
			opacity: {
				delay: 0.3,
				duration: 0.5,
			},
		},
	},
};

export const roomVariant = {
	initial: {
		opacity: 0,
		transition: {
			delay: 1,
			duration: 5,
		},
	},

	animate: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 5,
		},
	},
};
