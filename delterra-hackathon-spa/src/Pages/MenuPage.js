import React, { useContext, useEffect } from "react";

import { useAppStyles } from "../AppStyles";
import { Each } from "../Components/Each/Each";
import { TypographyType } from "../Constants/Typography";

import Typography from "../Components/Typography/Typography";
import { Grid } from "@material-ui/core";
import MenuCard from "../Components/MenuCard/MenuCard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTE_PATH } from "../Constants/RoutePath";
import { NAVBAR_TITLE } from "../Constants/NavbarTitle";
import { AppContext } from "../App";

const MenuPage = props => {
    const appClasses = useAppStyles()
    let history = useHistory();
    const { setIsNavbarBack, setNavbarTitle } = useContext(AppContext)

    const menuList = [
        {
            icon: <DashboardIcon />,
            label: "Dashboard",
            handleClick: () => {
                history.push({
                    pathname: `${ROUTE_PATH.DASHBOARD}`,
                })
            }
        },
        {
            icon: <DashboardIcon />,
            label: "List of Compost Package",
            handleClick: () => console.log("list of compost package")
        },
        {
            icon: <DashboardIcon />,
            label: "List of Waste",
            handleClick: () => {
                history.push({
                    pathname: `${ROUTE_PATH.LIST_OF_WASTE}`,
                })
            }
        },
        {
            icon: <DashboardIcon />,
            label: "List of Inbound",
            handleClick: () => {
                history.push({
                    pathname: `${ROUTE_PATH.LIST}`,
                })
            }
        },
        {
            icon: <DashboardIcon />,
            label: "List of Sales Invoice",
            handleClick: () => console.log("list of sales invoice")
        },
    ]

    useEffect(() => {
        setIsNavbarBack(false)
        setNavbarTitle(NAVBAR_TITLE.HOME)
    }, [])

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