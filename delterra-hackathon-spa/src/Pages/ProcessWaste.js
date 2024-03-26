import React, { useContext, useEffect, useState } from "react";

import { useAppStyles } from "../AppStyles";
import { AppContext } from "../App";
import { NAVBAR_TITLE } from "../Constants/NavbarTitle";
import moment from "moment";

import { Button, Grid } from "@material-ui/core";
import Form from "../Components/Form/Form";

const ProcessWaste = props => {
    const [deliveryId, setDeliveryId] = useState("")
    const [date, setDate] = useState(moment().format)
    const [status, setStatus] = useState("")
    const [weight, setWeight] = useState("")
    const [volume, setVolume] = useState("")
    const [temperature, setTemperature] = useState("")

    const appClasses = useAppStyles()

    const {
        setNavbarTitle
    } = useContext(AppContext)

    const handleProcessWaste = (event) => {
        event.preventDefault()
        console.log(deliveryId, date, status, weight, volume, temperature)
    }

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.PROCESS_WASTE)
    }, [])

    return (
        <form className={appClasses.p16} onSubmit={handleProcessWaste}>
            <Grid
                container
                className={`${appClasses.flexCenter} ${appClasses.alignCenter} ${appClasses.gap16}`}
                direction="column"
            >
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="deliveryId"
                        label="Delivery ID"
                        value={deliveryId}
                        type="number"
                        onChange={e => setDeliveryId(e.target.value)}
                    />
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="date"
                        label="Date"
                        value={date}
                        type="date"
                        onChange={e => setDate(e.target.value)}
                    />
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="status"
                        label="Status"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    />
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="weight"
                        label="Weight"
                        value={weight}
                        type="number"
                        onChange={e => setWeight(e.target.value)}
                    />
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="volume"
                        label="Volume"
                        value={volume}
                        type="number"
                        onChange={e => setVolume(e.target.value)}
                    />
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <Form
                        id="temperature"
                        label="Temperature"
                        value={temperature}
                        type="number"
                        onChange={e => setTemperature(e.target.value)}
                    />
                </Grid>

                <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                        PROCESS WASTE
                    </Button>
                </Grid>

            </Grid>

        </form>
    )
}

export default ProcessWaste