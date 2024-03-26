import React, { useContext, useEffect, useState } from "react";

import { useAppStyles } from "../AppStyles";
import { AppContext } from "../App";
import { NAVBAR_TITLE } from "../Constants/NavbarTitle";
import moment from "moment";

import { Button, Grid } from "@material-ui/core";
import Form from "../Components/Form/Form";
import Typography from "../Components/Typography/Typography";
import { Show } from "../Components/Show/Show";

const ProcessWaste = props => {
    const [wasteId, setWasteId] = useState("")
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const [status, setStatus] = useState("")
    const [weight, setWeight] = useState("")
    const [volume, setVolume] = useState("")
    const [temperature, setTemperature] = useState("")
    const [humidity, setHumidity] = useState("")
    const [waterAdded, setWaterAdded] = useState("")

    const appClasses = useAppStyles()

    const {
        setNavbarTitle
    } = useContext(AppContext)

    const handleProcessWaste = (event) => {
        event.preventDefault()
        console.log(wasteId, date, status, weight, volume, temperature)
    }

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.PROCESS_WASTE)
    }, [])

    return (
        <form className={appClasses.p20} onSubmit={handleProcessWaste}>
            <Grid
                container
                className={`${appClasses.flexCenter} ${appClasses.alignCenter} ${appClasses.gap16}`}
                direction="column"
            >
                <Show>
                    <Show.When isTrue={wasteId}>
                        <Grid className={appClasses.fullWidth} item>
                            <Form
                                id="wasteId"
                                label="Waste ID"
                                value={wasteId}
                                type="number"
                                onChange={e => setWasteId(e.target.value)}
                                disabled={true}
                            />
                        </Grid>
                    </Show.When>
                </Show>
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
                    <div className={`${appClasses.alignCenter} ${appClasses.flex} ${appClasses.gap8}`}>
                        <Form
                            id="weight"
                            label="Weight"
                            value={weight}
                            type="number"
                            onChange={e => setWeight(e.target.value)}
                        />
                        <Typography>
                            KG
                        </Typography>
                    </div>
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <div className={`${appClasses.alignCenter} ${appClasses.flex} ${appClasses.gap8}`}>
                        <Form
                            id="volume"
                            label="Volume"
                            value={volume}
                            type="number"
                            onChange={e => setVolume(e.target.value)}
                        />
                        <Typography>
                            M³
                        </Typography>
                    </div>
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <div className={`${appClasses.alignCenter} ${appClasses.flex} ${appClasses.gap8}`}>
                        <Form
                            id="temperature"
                            label="Temperature"
                            value={temperature}
                            type="number"
                            onChange={e => setTemperature(e.target.value)}
                        />
                        <Typography>
                            °C
                        </Typography>
                    </div>
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <div className={`${appClasses.alignCenter} ${appClasses.flex} ${appClasses.gap8}`}>
                        <Form
                            id="humidity"
                            label="Humidity"
                            value={humidity}
                            type="number"
                            onChange={e => setHumidity(e.target.value)}
                        />
                    </div>
                </Grid>
                <Grid className={appClasses.fullWidth} item>
                    <div className={`${appClasses.alignCenter} ${appClasses.flex} ${appClasses.gap8}`}>
                        <Form
                            id="waterAdded"
                            label="Water Added"
                            value={waterAdded}
                            onChange={e => setWaterAdded(e.target.value)}
                        />
                    </div>
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