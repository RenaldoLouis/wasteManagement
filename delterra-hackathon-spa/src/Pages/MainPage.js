import React, { useContext, useEffect, useState } from 'react';
import DashboardApi from '../Apis/DashboardApi';
import { Each } from '../Components/Each/Each';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveFunnel } from '@nivo/funnel'
import { ResponsiveBar } from "@nivo/bar";

import Typography from '../Components/Typography/Typography';
import { TypographyType } from '../Constants/Typography';

import { useAppStyles } from '../AppStyles';
import { useStyles } from '../styles/MainPageStyles';
import Grid from '@material-ui/core/Grid';
import CardPile from '../Components/CardPile/CardPile';

// import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { NAVBAR_TITLE } from '../Constants/NavbarTitle';
import { AppContext } from '../App';


const MainPage = props => {
    const appClasses = useAppStyles();
    const classes = useStyles();
    const [pokemon, setPokemon] = useState([]);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const { setIsNavbarBack, setNavbarTitle } = useContext(AppContext)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [compostConversionData, setCompostConversionData] = useState(
        [
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
        ]
    );

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

    useEffect(() => {
        setIsNavbarBack(true)
        setNavbarTitle(NAVBAR_TITLE.DASHBOARD)
        DashboardApi.getAllPokemons(25).then((res) => {
            console.log(res)
            setPokemon(res.data.results);
        }).catch((err) => console.log(err));
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {/* <Each of={pokemon} render={(data, i) =>
                <Typography
                    type={TypographyType.small}
                >
                    {data.name}
                </Typography>
            } /> */}
            {/* <ResponsiveBar
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
            /> */}
            <div className={`${appClasses.p8} ${appClasses.flexCenter} ${classes.titleDashboardContainer}`}>
                <Typography type={TypographyType.xLarge}>
                    Organic Compost Conversion
                </Typography>
            </div>
            <ResponsiveFunnel
                data={compostConversionData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                interpolation="linear"
                shapeBlending={0.37}
                valueFormat=">-.4s"
                colors={{ scheme: 'spectral' }}
                borderWidth={0}
                borderColor={{ from: 'color', modifiers: [] }}
                labelColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            3
                        ]
                    ]
                }}
                beforeSeparatorLength={100}
                beforeSeparatorOffset={20}
                afterSeparatorLength={100}
                afterSeparatorOffset={20}
                currentPartSizeExtension={10}
                currentBorderWidth={40}
                motionConfig="wobbly"
            />
            <div className={`${appClasses.p8} ${appClasses.flexCenter} ${classes.titleDashboardContainer}`}>
                <Typography type={TypographyType.xLarge}>
                    composition performance
                </Typography>
            </div>
            <ResponsivePie
                data={compostConversionData}
                margin={{ top: 0, right: 80, bottom: 80, left: 80 }}
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
                height={500}
            />

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider> */}
            <CardPile />
        </div>
    )
}

export default MainPage;