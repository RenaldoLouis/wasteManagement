import React, { useContext, useEffect, useState } from 'react';
import { useAppStyles } from '.././AppStyles';
import { Button, Grid } from '@material-ui/core';
import { AppContext } from '../App';
import { NAVBAR_TITLE } from '../Constants/NavbarTitle';
import Form from '../Components/Form/Form';
import moment from 'moment'


const AddInboundPage = () => {
    const Appclasses = useAppStyles()
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.ADDINBOUND)
    }, [])

    const [date, setDate] = useState(moment().format("DD/MM/YY"))
    const [note, setNote] = useState("")
    const [licensePlate, setLicensePlate] = useState("")
    const [organicWeight, setOrganicWeight] = useState(0)
    const [rejectedWeight, setRejectredWeight] = useState(0)
    const [hardOrganicWeight, setHardOrganicWeight] = useState(0)
    const [inOrganicWeight, setInOrganicWeight] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)

    const handleSubmitWaste = (event) => {
        event.preventDefault()
        console.log(date, note, rejectedWeight, hardOrganicWeight, inOrganicWeight, organicWeight, licensePlate)
    }

    useEffect(() => {

    }, [rejectedWeight, hardOrganicWeight])

    return (
        <form className={Appclasses.p16} onSubmit={handleSubmitWaste}>
            <Grid
                container
                className={`${Appclasses.flexCenter} ${Appclasses.alignCenter} ${Appclasses.gap16}`}
                direction="column"
            >
                <Grid className={Appclasses.fullWidth} item>
                    <Form
                        id="date"
                        label="Date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="licensePlate"
                            label="License Plate"
                            value={licensePlate}
                            onChange={e => setLicensePlate(e.target.value)}
                        />
                    </div>
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="organicWeight"
                            label="Organic Weight"
                            value={organicWeight}
                            onChange={e => setOrganicWeight(e.target.value)}
                        />
                        <div>
                            KG
                        </div>
                    </div>
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="inOrganicWeight"
                            label="Inorganic Weight"
                            value={inOrganicWeight}
                            onChange={e => setInOrganicWeight(e.target.value)}
                        />
                        <div>
                            KG
                        </div>
                    </div>
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="hardOrganicWeight"
                            label="Hard Organic Weight"
                            value={hardOrganicWeight}
                            onChange={e => setHardOrganicWeight(e.target.value)}
                        />
                        <div>
                            KG
                        </div>
                    </div>
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="rejectedWeight"
                            label="Rejected Weight"
                            value={rejectedWeight}
                            onChange={e => setRejectredWeight(e.target.value)}
                        />
                        <div>
                            KG
                        </div>
                    </div>
                </Grid>
                <Grid className={Appclasses.fullWidth} item>
                    <div className={`${Appclasses.alignCenter} ${Appclasses.flex} ${Appclasses.gap8}`} style={{ display: "flex" }}>
                        <Form
                            id="note"
                            label="Note"
                            value={note}
                            onChange={e => setNote(e.target.value)}
                        />
                        <div>
                            KG
                        </div>
                    </div>
                </Grid>

                <Grid item spacing={3}>
                    <Button variant="contained">
                        Submit
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        Process Waste
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddInboundPage;