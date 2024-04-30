export const fadeInAnimation = {
    initial: { y: 200, opacity: 0},
    animate: (i) => {
        return {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * i,
                duration: 0.3
            },
        };
    },
};