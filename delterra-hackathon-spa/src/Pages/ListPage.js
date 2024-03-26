import React, { useContext, useEffect, useState } from 'react';
import DashboardApi from '../Apis/DashboardApi';
import { Each } from '../Components/Each/Each';
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';
import { ROUTE_PATH } from '../Constants/RoutePath';
import DetailPage from './DetailPage';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Form from '../Components/Form/Form';
import { useAppStyles } from '.././AppStyles';
import { AppContext } from '../App';

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
    const [tanggal, setTanggal] = useState("")
    const [idArmada, setIdArmada] = useState("")
    const [kemurnian, setKemurnian] = useState("")
    const [volume, setVolume] = useState("")
    const [catatan, setCatatan] = useState("")

    const classes = useAppStyles()

    const handleSubmitWaste = (event) => {
        event.preventDefault()

        console.log(tanggal, idArmada, kemurnian, volume, catatan)
    }

    return (
        <form onSubmit={handleSubmitWaste}>
            <Grid
                container
                className={`${classes.flexCenter} ${classes.alignCenter} ${classes.gap16}`}
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

                <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                        Sampah Masuk
                    </Button>
                    <Button variant="contained">
                        Mulai Pengomposan
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

const ListPage = props => {
    const { isNavbarBack, setIsNavbarBack } = useContext(AppContext)
    return (
        <Switch>
            <Route path={ROUTE_PATH.LIST} exact>
                <WasteRecordForm />
            </Route>

            <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route>
        </Switch>
    )
}

export default ListPage;
