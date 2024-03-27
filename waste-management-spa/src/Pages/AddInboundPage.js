import React, { useContext, useEffect, useState } from 'react';
import { useAppStyles } from '.././AppStyles';
import { Button, Grid } from '@material-ui/core';
import { AppContext } from '../App';
import { NAVBAR_TITLE } from '../Constants/NavbarTitle';
import Form from '../Components/Form/Form';
import moment from 'moment'
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';
import InboundApi from '../Apis/InboundApi';
import { ROUTE_PATH } from '../Constants/RoutePath';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AddInboundPage = () => {
    const history = useHistory()
    const Appclasses = useAppStyles()
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)

    useEffect(() => {
        setIsNavbarBack(true)
        setNavbarTitle(NAVBAR_TITLE.ADDINBOUND)
    }, [])

    const [deliveryId, setDeliveryId] = useState("123")
    const [note, setNote] = useState("")
    const [licensePlate, setLicensePlate] = useState("")
    const [organicWeight, setOrganicWeight] = useState(0)
    const [inOrganicWeight, setInOrganicWeight] = useState(0)
    const [rejectedWeight, setRejectredWeight] = useState(0)
    const [hardOrganicWeight, setHardOrganicWeight] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)

    const [errorExist, setErrorExist] = useState(false)

    const handleSubmitWaste = (event) => {
        event.preventDefault()

        if (rejectedWeight === 0) {
            setErrorExist(true)
            return;
        }

        if (organicWeight === 0) {
            setErrorExist(true)
            return;
        }

        if (inOrganicWeight === 0) {
            setErrorExist(true)
            return;
        }

        if (hardOrganicWeight === 0) {
            setErrorExist(true)
            return;
        }

        if (licensePlate === "") {
            setErrorExist(true)
            return;
        }

        if (note === "") {
            setErrorExist(true)
            return;
        }

        let objSend = {
            rejected_weight: rejectedWeight,
            organic_weight: organicWeight,
            inorganic_weight: inOrganicWeight,
            hardOrganic_weight: hardOrganicWeight,
            license_plate: licensePlate,
            note: note,
        }

        InboundApi.createInboundDeliveryData(objSend).then((res) => {
            if (res.status === 200) {
                history.push({
                    pathname: `${ROUTE_PATH.LIST}`,
                })
            }
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        let totalWeight = 0;
        totalWeight = parseInt(rejectedWeight) + parseInt(hardOrganicWeight) + parseInt(organicWeight) + parseInt(inOrganicWeight)
        let intTotalWeight = parseInt(totalWeight)
        if (intTotalWeight <= 0) {
            totalWeight = 0
        }
        setTotalWeight(totalWeight)
    }, [rejectedWeight, hardOrganicWeight, organicWeight, inOrganicWeight])

    return (
        <form className={Appclasses.p20} onSubmit={handleSubmitWaste}>
            <Grid
                container
                className={`${Appclasses.flexCenter} ${Appclasses.alignCenter} ${Appclasses.gap16}`}
                direction="column"
            >
                {/* <Grid className={Appclasses.fullWidth} item>
                    <Form
                        id="deliveryId"
                        label="Delivery ID"
                        value={deliveryId}
                        disabled={true}
                    />
                </Grid> */}
                {/* <Grid className={Appclasses.fullWidth} item>
                    <Form
                        id="date"
                        // label="Date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        type={"date"}
                    />
                </Grid> */}
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
                            onChange={e => setOrganicWeight(e.target.value === "0" || e.target.value === "" ? "0" : parseInt(e.target.value))}
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
                            onChange={e => setInOrganicWeight(e.target.value === "0" || e.target.value === "" ? "0" : parseInt(e.target.value))}
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
                            onChange={e => setHardOrganicWeight(e.target.value === "0" || e.target.value === "" ? "0" : parseInt(e.target.value))}
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
                            onChange={e => setRejectredWeight(e.target.value === "0" || e.target.value === "" ? "0" : parseInt(e.target.value))}
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

                {
                    errorExist && (
                        <div className={Appclasses.colorRed}>
                            Please Fill All Form
                        </div>
                    )
                }

                <Grid className={`${Appclasses.fullWidth} ${Appclasses.flexEnd}`} item>
                    Total Weight {totalWeight} KG
                </Grid>

                <Grid className={`${Appclasses.fullWidth} ${Appclasses.gap8}`} item >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Button className={`${Appclasses.fullWidth}`} variant="contained" type="submit">

                                <Typography type={TypographyType.xSmall}>
                                    Submit
                                </Typography>
                            </Button>

                        </Grid>
                        <Grid item xs={6}>
                            <Button className={`${Appclasses.fullWidth}`} variant="contained" color="primary">
                                <Typography className={Appclasses.colorWhite} type={TypographyType.xSmall}>
                                    Process Waste
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddInboundPage;