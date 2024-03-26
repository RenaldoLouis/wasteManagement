import React, { useContext, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Button, Grid } from '@material-ui/core';
import moment from 'moment'

import { Each } from '../Components/Each/Each';
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';
import { ROUTE_PATH } from '../Constants/RoutePath';
import DetailPage from './DetailPage';
import Form from '../Components/Form/Form';
import { useAppStyles } from '.././AppStyles';
import { AppContext } from '../App';
import AddInboundPage from './AddInboundPage';
import DashboardApi from '../Apis/DashboardApi';
import { NAVBAR_TITLE } from '../Constants/NavbarTitle';
import PlaceHolder from '../Components/PlaceHolder/PlaceHolder';
import InboundApi from '../Apis/InboundApi';
import { Show } from '../Components/Show/Show';

const ListInboundTable = props => {
    const { Appclasses, handleAddInbound, inboundDeliveryData, setInboundDeliveryData, setIsLoading } = props

    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        if (inboundDeliveryData.length > 0) {
            setTableData(inboundDeliveryData)
        }
    }, [inboundDeliveryData])

    const handleChangeDate = (selectedDate) => {
        setDate(selectedDate)
        setIsLoading(true)

        let tempCloneData = [...inboundDeliveryData]

        const filteredData = tempCloneData.filter(item => {
            const createdAtDate = moment(item.created_at).format("YYYY-MM-DD");
            return createdAtDate === selectedDate;
        });
        setTableData(filteredData)
        setIsLoading(false)
    }

    return (
        <div className={Appclasses.p20}>

            <Grid className={`${Appclasses.mb8}`} container spacing={3}>
                <Grid item xs={6} />
                <Grid className={`${Appclasses.flexEnd}`} item xs={6}>
                    <Form
                        id="date"
                        value={date}
                        onChange={e => handleChangeDate(e.target.value)}
                        type="date"
                    />
                </Grid>
            </Grid>
            {tableData.length > 0 ? (
                <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography type={TypographyType.xxSmallBold}>
                                            Delivery Id
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography type={TypographyType.xxSmallBold}>
                                            License Plate
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography type={TypographyType.xxSmallBold}>
                                            Organic Weight
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography type={TypographyType.xxSmallBold}>
                                            Total Weight
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row) => {
                                    let intRejectedWeight = isNaN(parseInt(row.rejected_weight)) ? 0 : parseInt(row.rejected_weight)
                                    let intOrganicWeight = isNaN(parseInt(row.organic_weight)) ? 0 : parseInt(row.organic_weight)
                                    let intInOrganicWeight = isNaN(parseInt(row.inorganic_weight)) ? 0 : parseInt(row.inorganic_weight)
                                    let intHardOrganicWeight = isNaN(parseInt(row.hard_organic_weight)) ? 0 : parseInt(row.hard_organic_weight)

                                    const totalWeight = intRejectedWeight + intOrganicWeight + intInOrganicWeight + intHardOrganicWeight
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.license_plate}</TableCell>
                                            <TableCell align="right">{row.organic_weight}</TableCell>
                                            <TableCell align="right">{totalWeight}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid container className={Appclasses.mt16}>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={handleAddInbound}
                            className={`${Appclasses.fullWidth}`} variant="contained" color="primary" type="submit">
                            Add Inbound Delivery
                        </Button>
                    </Grid>
                </>
            ) : (
                <Grid
                    container
                    className={`${Appclasses.mt16} ${Appclasses.flexCenter} ${Appclasses.alignCenter} ${Appclasses.gap16}`}
                    direction="column"
                >
                    <Typography type={TypographyType.xLarge}>
                        No List of Inbound Found
                    </Typography>
                </Grid>
            )}


        </div >
    )
}

const ListPage = props => {
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)
    const [inboundDeliveryData, setInboundDeliveryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()
    const handleAddInbound = () => {
        history.push({
            pathname: `${ROUTE_PATH.ADDINBOUND}`,
        })
    }
    useEffect(() => {
        setIsNavbarBack(true)
        setNavbarTitle(NAVBAR_TITLE.LISTINBOUND)
    }, [])

    const Appclasses = useAppStyles()

    useEffect(() => {
        InboundApi.getInboundDeliveryData().then((res) => {
            setInboundDeliveryData(res.data);
            setIsLoading(false)
        }).catch((err) => console.log(err));
    }, [])

    return (
        <Switch>
            <Route path={ROUTE_PATH.LIST} exact>
                <Show>
                    <Show.When isTrue={inboundDeliveryData.length > 0}>
                        {inboundDeliveryData.length <= 0 && !isLoading ? (
                            <PlaceHolder text={"add Inbound Delivery"} Appclasses={Appclasses} handleClick={handleAddInbound} />
                        ) : (
                            <ListInboundTable setIsLoading={setIsLoading} inboundDeliveryData={inboundDeliveryData} setInboundDeliveryData={setInboundDeliveryData} Appclasses={Appclasses} handleAddInbound={handleAddInbound} />
                        )}
                    </Show.When>

                    <Show.Else>
                        <Typography type={TypographyType.xxLargeBold}>
                            LOADING...
                        </Typography>
                    </Show.Else>
                </Show>
            </Route>

            <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route>
        </Switch>
    )
}

export default ListPage;
