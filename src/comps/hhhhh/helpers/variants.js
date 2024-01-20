/* eslint-disable */
export const roomSettingDesktopVariants = {
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
                delay: 0.5,
            },
        },
    },

    exit: {
        opacity: 0,
        width: "0rem",
        transition: {
            width: {
                delay: 0.1,
                duration: 0.5,
            },
            opacity: {
                duration: 0.3,
            },
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