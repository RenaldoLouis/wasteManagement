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
import { NAVBAR_TITLE } from "../Constants/NavbarTitle";
import { ROUTE_PATH } from "../Constants/RoutePath";
import PlaceHolder from "../Components/PlaceHolder/PlaceHolder";
import { AppContext } from '../App';
import { useAppStyles } from '../AppStyles';

const ComposeTable = props => {
    const { Appclasses, handleAddComposePackage } = props

    const [date, setDate] = useState(moment().format("DD/MM/YY"))

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    console.log("date", date)
    return (
        <div className={Appclasses.p20}>
            <Grid className={`${Appclasses.mb8}`} container spacing={3}>
                <Grid item xs={6} />
                <Grid className={`${Appclasses.flexEnd}`} item xs={6}>
                    <Form
                        id="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        type="date"
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Delivery Id</TableCell>
                            <TableCell>License Plate</TableCell>
                            <TableCell align="right">Organic Weight</TableCell>
                            <TableCell align="right">Total Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container className={Appclasses.mt16}>
                <Button
                    startIcon={<AddIcon />}
                    onClick={handleAddInbound}
                    className={`${Appclasses.fullWidth}`} variant="contained" color="primary" type="submit">
                    Create Compost Package
                </Button>
            </Grid>
        </div >
    )
}

const ComposePackage = (props) => {
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)
    const history = useHistory()
    const handleAddComposePackage = () => {
        history.push({
            pathname: `${ROUTE_PATH.CREATECOMPOSEPACKAGE}`,
        })
    }
    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.LISTOFCOMPOST)
    }, [])

    const [listOfPackageData, setListOfPackageData] = useState([]);
    const Appclasses = useAppStyles()

    return (
        <Switch>
            <Route path={ROUTE_PATH.COMPOSEPACKGE} exact>
                {listOfPackageData.length <= 0 ? (
                    <PlaceHolder text={"Create Compost Package"} Appclasses={Appclasses} handleClick={handleAddComposePackage} />
                ) : (
                    <ComposeTable Appclasses={Appclasses} handleAddComposePackage={handleAddComposePackage} />
                )}
                {/* <ComposeTable Appclasses={Appclasses} handleAddComposePackage={handleAddComposePackage} /> */}
            </Route>

            {/* <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route> */}
        </Switch>
    )
}

export default ComposePackage;