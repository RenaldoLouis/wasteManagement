import React from "react";

import { useAppStyles } from "../AppStyles";
import { Each } from "../Components/Each/Each";
import { TypographyType } from "../Constants/Typography";

import Typography from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import MenuCard from "../Components/MenuCard/MenuCard";
import DashboardIcon from "@material-ui/icons/Dashboard";

const MenuPage = props => {

    const menuList = [
        {
            icon: <DashboardIcon />,
            label: "Dashboard",
            handleClick: () => console.log("dashboard")
        },
        {
            icon: <DashboardIcon />,
            label: "List of Compost Package",
            handleClick: () => console.log("list of compost package")
        },
        {
            icon: <DashboardIcon />,
            label: "List of Waste",
            handleClick: () => console.log("list of waste")
        },
        {
            icon: <DashboardIcon />,
            label: "List of Inbound",
            handleClick: () => console.log("list of inbound")
        },
        {
            icon: <DashboardIcon />,
            label: "List of Sales Invoice",
            handleClick: () => console.log("list of sales invoice")
        },
    ]

    const appClasses = useAppStyles()

    return (
        <Grid
            container
            className={`${appClasses.flexCenter} ${appClasses.gap24} ${appClasses.pt40} ${appClasses.pb24} ${appClasses.pl20} ${appClasses.pr20}`}
            style={{ width: '100%' }}
        >
            <Grid item>
                <Typography type={TypographyType.mediumSemiBold} style={{ fontSize: 20 }}>
                    Welcome
                </Typography>
            </Grid>

            <Grid
                container
                className={`${appClasses.flexCenter} ${appClasses.gap8}`}
            >
                <Each of={menuList} render={(menu) =>
                    <Grid
                        item
                        className={`${appClasses.flexCenter}`}
                    >
                        <MenuCard data={menu} />
                    </Grid>
                } />
            </Grid>
        </Grid>
    )
}

export default MenuPage