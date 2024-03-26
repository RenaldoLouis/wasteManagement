import { Color } from "./Color";

const xxLarge = {
    fontSize: "24px",
    lineHeight: "36px",
    letterSpacing: "0.12px",
}

const xLarge = {
    fontSize: "20px",
    lineHeight: "26px",
    letterSpacing: "0.1px"
}

const large = {
    fontFamily: "Inter",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.09px",
}

const medium = {
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "22px",
}

const small = {
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "20px",
}

const xSmall = {
    fontFamily: "Inter",
    fontSize: "12px",
    lineHeight: "16px",
}

const xxSmall = {
    fontFamily: "Inter",
    fontSize: "10px",
    lineHeight: "14px",
}

export const TypographyType = {
    xxLarge: {
        ...xxLarge,
        fontWeight: 400
    },
    xxLargeBold: {
        ...xxLarge,
        fontWeight: 700
    },
    xLarge: {
        ...xLarge,
        fontWeight: 500
    },
    large: {
        ...large,
        fontWeight: 500
    },
    medium: {
        ...medium,
        fontWeight: 400
    },
    mediumMedium: {
        ...medium,
        fontWeight: 500
    },
    mediumSemiBold: {
        ...medium,
        fontWeight: 600
    },
    small: {
        ...small,
        fontWeight: 400
    },
    smallMedium: {
        ...small,
        fontWeight: 500
    },
    smallSemiBold: {
        ...small,
        fontWeight: 600
    },
    smallBold: {
        ...small,
        fontWeight: 700
    },
    xSmall: {
        ...xSmall,
        fontWeight: 400
    },
    xSmallMedium: {
        ...xSmall,
        fontWeight: 500,
    },
    xSmallSemiBold: {
        ...xSmall,
        fontWeight: 600,
    },
    xSmallBold: {
        ...xSmall,
        fontWeight: 700,
    },
    xxSmall: {
        ...xxSmall,
        fontWeight: 400
    },
    xxSmallMedium: {
        ...xSmall,
        fontWeight: 500,
    },
    xxSmallBold: {
        ...xSmall,
        fontWeight: 700,
    },
}