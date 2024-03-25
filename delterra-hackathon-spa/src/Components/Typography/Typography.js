// React Lib
import React, { memo } from "react";

// Material UI Core
import MUITypography from "@material-ui/core/Typography";
import { TypographyType } from "../../Constants/Typography";
import { Color } from "../../Constants/Color";

const Typography = (props) => {
    const {
        id,
        fontFamily,
        color,
        style,
        className,
        onMouseOver,
        onMouseOut,
        onClick,
        noWrap,
        type
    } = props;

    return (
        <MUITypography
            id={id}
            style={{
                fontFamily: fontFamily,
                color: color,
                ...type,
                ...style
            }}
            className={className}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={onClick}
            noWrap={noWrap ? noWrap : false}
        >
            {props.children}
        </MUITypography>
    )
}

Typography.defaultProps = {
    fontFamily: "Inter",
    color: Color.neutral[100],
    type: TypographyType.medium
}

export default memo(Typography)