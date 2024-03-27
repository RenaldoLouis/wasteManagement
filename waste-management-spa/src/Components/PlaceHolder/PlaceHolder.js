import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Button, Grid } from '@material-ui/core';
import moment from 'moment'

const PlaceHolder = (props) => {
    const { text, Appclasses, handleClick } = props
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
                <Button
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleClick}
                >{text}
                </Button>
            </div>
        </Grid>
    )
}

export default PlaceHolder;