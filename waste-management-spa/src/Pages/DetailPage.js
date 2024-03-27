import React, { useEffect, useState } from 'react';
import DashboardApi from '../Apis/DashboardApi';
import { Each } from '../Components/Each/Each';
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';
import { ROUTE_PATH } from '../Constants/RoutePath';
import { useParams } from 'react-router-dom';
import { Show } from '../Components/Show/Show';
import { useHistory } from 'react-router-dom';

const DetailPage = props => {
    const [pokemon, setPokemon] = useState(null);
    const param = useParams();
    const history = useHistory()

    const goBack = () => {
        history.push({
            pathname: ROUTE_PATH.LIST,
        })
    }

    useEffect(() => {
        DashboardApi.getPokemonById(param.id).then((res) => {
            setPokemon(res.data);
        }).catch((err) => console.log(err));
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Typography type={TypographyType.mediumSemiBold} onClick={goBack}>
                Go back
            </Typography>
            <Show>
                <Show.When isTrue={pokemon !== null}>
                    <Typography type={TypographyType.xxLargeBold}>
                        Name: {pokemon?.name}
                    </Typography>

                    <Typography type={TypographyType.xLarge}>
                        Abilities:
                    </Typography>
                    <Each of={pokemon?.abilities} render={(ability) =>
                        <Typography type={TypographyType.large}>
                            {ability?.ability?.name}
                        </Typography>
                    } />
                </Show.When>

                <Show.Else>
                    <Typography type={TypographyType.xxLargeBold}>
                        LOADING...
                    </Typography>
                </Show.Else>
            </Show>
        </div>
    )
}

export default DetailPage;
