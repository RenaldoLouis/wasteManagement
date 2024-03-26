import React from "react";

import { useAppStyles } from "../../AppStyles";
import { useStyles } from "./MenuCardStyles";

import { Paper, SvgIcon } from "@material-ui/core";
import Typography from "../Typography/Typography";
import { Color } from "../../Constants/Color";
import { TypographyType } from "../../Constants/Typography";

const MenuCard = props => {
    const {
        data
    } = props

    const appClasses = useAppStyles()
    const classes = useStyles()

    return (
        <Paper
            className={`${classes.root}`}
            onClick={data.handleClick}
        >
            <SvgIcon className={appClasses.pt44} htmlColor={Color.neutral[0]}>
                {data.icon}
            </SvgIcon>
            <Typography color={Color.neutral[0]} type={TypographyType.smallMedium}>
                {data.label}
            </Typography>
        </Paper>
    )
}

export default MenuCard