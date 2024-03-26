import React, { useContext, useEffect, useState } from "react";
import Typography from "../Components/Typography/Typography";
import { Each } from "../Components/Each/Each";
import { Box, Grid, IconButton, Menu, MenuItem, Paper, TextField } from "@material-ui/core";
import Form from "../Components/Form/Form";
import moment from "moment";
import { useAppStyles } from "../AppStyles";
import { Color } from "../Constants/Color";
import { TypographyType } from "../Constants/Typography";
import { MoreVert } from "@material-ui/icons";
import { AppContext } from "../App";
import { NAVBAR_TITLE } from "../Constants/NavbarTitle";

const StatusChip = props => {
    const {
        value
    } = props

    const appClasses = useAppStyles()

    return (
        <div
            className={`${appClasses.p8}`}
            style={{ borderRadius: 16, backgroundColor: Color.neutral[40] }}
        >
            <Typography type={TypographyType.xxSmall} color={Color.neutral[0]}>
                {value}
            </Typography>
        </div>
    )
}

const ListOfWastePage = props => {

    const [wasteList, setWasteList] = useState([
        {
            wasteId: 64358,
            status: "STATUS 1"
        },
        {
            wasteId: 45645,
            status: "STATUS 2"
        },
        {
            wasteId: 65787,
            status: "STATUS 2"
        },
        {
            wasteId: 55545,
            status: "STATUS 1"
        },
        {
            wasteId: 56788,
            status: "STATUS 1"
        },
    ])
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const {
        setNavbarTitle
    } = useContext(AppContext)

    const appClasses = useAppStyles()

    const showMoreOptions = [
        "Waste Detail",
        "Update Condition"
    ]

    const handleClickMoreOption = (event) => {
        console.log(event)
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMoreOption = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.LIST_OF_WASTE)
    }, [])

    return (
        <Grid
            container
            className={`${appClasses.flexEnd} ${appClasses.p20} ${appClasses.gap16}`}
            direction="column"
        >
            <Grid item className={`${appClasses.flexEnd}`} style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                <Box style={{ width: "50%" }}>
                    <Form
                        id="date"
                        label="DATE"
                        value={date}
                        type="date"
                        onChange={e => setDate(e.target.value)}
                    />
                </Box>
            </Grid>

            <Grid container item className={appClasses.gap16}>
                <Each of={wasteList} render={(waste) =>
                    <Grid item style={{ width: "100%" }}>
                        <Paper className={`${appClasses.flexSpaceBetween} ${appClasses.p16} ${appClasses.alignCenter}`}>
                            <Typography>
                                {waste.wasteId}
                            </Typography>

                            <Box className={`${appClasses.flex} ${appClasses.gap8} ${appClasses.alignCenter}`}>
                                <StatusChip value={waste.status} />
                                <IconButton
                                    aria-label="more"
                                    id="show-more-button"
                                    aria-controls={open ? "show-more-menu" : undefined}
                                    aria-expanded={open ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClickMoreOption}
                                >
                                    <MoreVert />
                                </IconButton>

                                {/* Show more menu */}
                                <Menu
                                    id="show-more-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleCloseMoreOption}
                                    PaperProps={{
                                        style: {
                                            maxHeight: 200,
                                            width: "100%"
                                        }
                                    }}
                                >
                                    <Each of={showMoreOptions} render={(option) =>
                                        <MenuItem onClick={handleCloseMoreOption}>
                                            {option}
                                        </MenuItem>
                                    } />
                                </Menu>
                            </Box>
                        </Paper>
                    </Grid>
                } />
            </Grid>
        </Grid>
    )
}

export default ListOfWastePage