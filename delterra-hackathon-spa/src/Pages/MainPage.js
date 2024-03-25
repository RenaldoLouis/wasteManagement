import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from "@nivo/bar";
import DashboardApi from '../Apis/DashboardApi';
import { Each } from '../Components/Each/Each';
import { ResponsivePie } from '@nivo/pie';
import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';

const MainPage = props => {
    const [pokemon, setPokemon] = useState([]);
    const data = [
        {
            day: "Monday",
            degress: 59
        },
        {
            day: "Tuesday",
            degress: 61
        },
        {
            day: "Wednesday",
            degress: 55
        },
        {
            day: "Thursday",
            degress: 78
        },
        {
            day: "Friday",
            degress: 71
        },
        {
            day: "Saturday",
            degress: 56
        },
        {
            day: "Sunday",
            degress: 67
        }
    ];

    const data2 = [
        {
            id: "java",
            label: "java",
            value: 195,
            color: "hsl(90, 70%, 50%)"
        },
        {
            id: "erlang",
            label: "erlang",
            value: 419,
            color: "hsl(56, 70%, 50%)"
        },
        {
            id: "ruby",
            label: "ruby",
            value: 407,
            color: "hsl(103, 70%, 50%)"
        },
        {
            id: "haskell",
            label: "haskell",
            value: 474,
            color: "hsl(186, 70%, 50%)"
        },
        {
            id: "go",
            label: "go",
            value: 71,
            color: "hsl(104, 70%, 50%)"
        }
    ];

    useEffect(() => {
        DashboardApi.getAllPokemons(25).then((res) => {
            console.log(res)
            setPokemon(res.data.results);
        }).catch((err) => console.log(err));
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Each of={pokemon} render={(data, i) =>
                <Typography
                    type={TypographyType.small}
                >
                    {data.name}
                </Typography>
            } />
            <ResponsiveBar
                data={data}
                keys={["degress"]}
                indexBy="day"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.4}
                valueScale={{ type: "linear" }}
                colors="#3182CE"
                animate={true}
                enableLabel={false}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "degrees",
                    legendPosition: "middle",
                    legendOffset: -40
                }}
            />
            <ResponsivePie
                data={data2}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
        </div>
    )
}

export default MainPage;