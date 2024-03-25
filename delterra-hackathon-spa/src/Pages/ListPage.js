import React, { useEffect, useState } from 'react';
import DashboardApi from '../Apis/DashboardApi';
import { Each } from '../Components/Each/Each';
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';
import { ROUTE_PATH } from '../Constants/RoutePath';
import DetailPage from './DetailPage';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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

const ListPage = props => {
    return (
        <Switch>
            <Route path={ROUTE_PATH.LIST} exact>
                <PokemonList />
            </Route>

            <Route path={ROUTE_PATH.DETAIL + "/:id"}>
                <DetailPage />
            </Route>
        </Switch>
    )
}

export default ListPage;
