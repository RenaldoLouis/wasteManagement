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
import moment from 'moment'


const PokemonList = props => {
    const [pokemon, setPokemon] = useState([]);
    const history = useHistory()

    const handleClickPokemon = (data) => () => {
        const urls = data.url.split("/");
        history.push({
            pathname: `${ROUTE_PATH.DETAIL}/${urls[urls.length - 2]}`,
        })
    }

    useEffect(() => {
        DashboardApi.getAllPokemons(25).then((res) => {
            setPokemon(res.data.results);
        }).catch((err) => console.log(err));
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Each of={pokemon} render={(data) =>
                <div
                    onClick={handleClickPokemon(data)}
                >
                    <Typography
                        type={TypographyType.small}
                    >
                        {data.name}
                    </Typography>
                </div>
            } />
        </div>
    )
}

const ListInboundTable = props => {
    const { Appclasses, handleAddInbound } = props

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
                    Add Inbound Delivery
                </Button>
            </Grid>
        </div >
    )
}

const PlaceHolder = (props) => {
    const { Appclasses, handleAddInbound } = props
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
                    onClick={handleAddInbound}
                >add Inbound Delivery
                </Button>
            </div>
        </Grid>
    )
}

const ListPage = props => {
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)
    const history = useHistory()
    const handleAddInbound = () => {
        history.push({
            pathname: `${ROUTE_PATH.ADDINBOUND}`,
        })
    }
    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.LISTINBOUND)
    }, [])

    const [inboundDeliveryData, setInboundDeliveryData] = useState([]);
    const Appclasses = useAppStyles()

    return (
        <Switch>
            <Route path={ROUTE_PATH.LIST} exact>
                {/* {inboundDeliveryData.length <= 0 ? (
                    <PlaceHolder Appclasses={Appclasses} handleAddInbound={handleAddInbound}/>
                ) : (
                    <ListInboundTable Appclasses={Appclasses} />
                )} */}
                <ListInboundTable Appclasses={Appclasses} handleAddInbound={handleAddInbound} />
            </Route>

            <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route>
        </Switch>
    )
}

export default ListPage;
