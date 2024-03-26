import React, { useContext, useEffect, useState } from 'react';
import { useAppStyles } from '.././AppStyles';
import { Button, Grid } from '@material-ui/core';
import { AppContext } from '../App';
import { NAVBAR_TITLE } from '../Constants/NavbarTitle';

const AddInboundPage = () => {
    const Appclasses = useAppStyles()
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.ADDINBOUND)
    }, [])

    return (
        <Grid
            container
            className={`${Appclasses.flexCenter} ${Appclasses.alignCenter} ${Appclasses.gap16} ${Appclasses.fullHeightvh}`}
            direction="column"
        >
            <div>
                asd
            </div>
            <div>
                {/* <Button
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddInbound}
                >add Inbound Delivery
                </Button> */}
            </div>
        </Grid>
    )
}

export default AddInboundPage;