/* eslint-disable */
export const roomSettingVariants = {
    initial: {
        opacity: 0,
        width: "0rem",
    },

    animate: {
        opacity: 1,
        width: "15rem",
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