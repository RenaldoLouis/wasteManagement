import React, { useContext, useEffect, useState } from 'react';
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

const WasteRecordForm = props => {
    const { Appclasses } = props

    const [tanggal, setTanggal] = useState("")
    const [idArmada, setIdArmada] = useState("")
    const [kemurnian, setKemurnian] = useState("")
    const [volume, setVolume] = useState("")
    const [catatan, setCatatan] = useState("")

    const handleSubmitWaste = (event) => {
        event.preventDefault()
        console.log(tanggal, idArmada, kemurnian, volume, catatan)
    }

    return (
        <form onSubmit={handleSubmitWaste}>
            <Grid
                container
                className={`${Appclasses.flexCenter} ${Appclasses.alignCenter} ${Appclasses.gap16}`}
                direction="column"
            >
                <Grid item>
                    <Form
                        id="tanggal"
                        label="Tanggal"
                        value={tanggal}
                        onChange={e => setTanggal(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Form
                        id="id-armada"
                        label="ID Armada"
                        value={idArmada}
                        onChange={e => setIdArmada(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Form
                        id="kemurnian"
                        label="% Kemurnian"
                        value={kemurnian}
                        onChange={e => setKemurnian(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Form
                        id="volume"
                        label="$ Volume"
                        value={volume}
                        onChange={e => setVolume(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Form
                        id="catatan"
                        label="Catatan"
                        value={catatan}
                        onChange={e => setCatatan(e.target.value)}
                    />
                </Grid>

                <Grid item spacing={3}>
                    <Button variant="contained">
                        Sampah Masuk
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        Mulai Pengomposan
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

const PlaceHolder = (props) => {
    const { Appclasses } = props
    const history = useHistory()

    const handleAddInbound = () => {
        history.push({
            pathname: `${ROUTE_PATH.ADDINBOUND}`,
        })
    }
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

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.LISTINBOUND)
    }, [])

    const [inboundDeliveryData, setInboundDeliveryData] = useState([]);
    const Appclasses = useAppStyles()

    return (
        <Switch>
            <Route path={ROUTE_PATH.LIST} exact>
                {inboundDeliveryData.length <= 0 ? (
                    <PlaceHolder Appclasses={Appclasses} />
                ) : (
                    <WasteRecordForm Appclasses={Appclasses} />
                )}
            </Route>

            <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route>
        </Switch>
    )
}

export default ListPage;
