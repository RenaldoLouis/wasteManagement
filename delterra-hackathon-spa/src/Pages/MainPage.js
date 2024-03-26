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
import InboundApi from '../Apis/InboundApi';
import { Color } from '../Constants/Color';


const MainPage = props => {
    const appClasses = useAppStyles();
    const classes = useStyles();
    const { isNavbarBack, setIsNavbarBack, setNavbarTitle } = useContext(AppContext)
    const [inboundDeliveryData, setInboundDeliveryData] = useState([])
    const [wasteData, setWasteData] = useState([])
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        setNavbarTitle(NAVBAR_TITLE.DASHBOARD)
        InboundApi.getInboundDeliveryData().then((res) => {
            setInboundDeliveryData(res.data);
        }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        setIsNavbarBack(true)
        setNavbarTitle(NAVBAR_TITLE.DASHBOARD)
        DashboardApi.getAllWaste().then((res) => {
            setWasteData(res.data);
        }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        // Initialize an object to hold aggregated weights for each day of the week
        const aggregatedData = {
            MON: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
            TUE: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
            WED: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
            THU: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
            FRI: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
            SAT: { rejectedWeight: 0, organicWeight: 0, inorganicWeight: 0 },
        };

        // Iterate over the data and aggregate weights for each day of the week
        inboundDeliveryData.forEach(item => {
            const createdAt = new Date(item.created_at);
            const dayOfWeek = createdAt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

            // Aggregate weights based on the day of the week
            aggregatedData[dayOfWeek].rejectedWeight += parseInt(item.rejected_weight);
            aggregatedData[dayOfWeek].organicWeight += parseInt(item.organic_weight);
            aggregatedData[dayOfWeek].inorganicWeight += parseInt(item.inorganic_weight);
        });

        // Convert aggregated data into the desired format
        const transformedData = Object.keys(aggregatedData).map(day => ({
            day,
            rejectedWeight: aggregatedData[day].rejectedWeight,
            rejectedWeightColor: Color.primary[0],
            organicWeight: aggregatedData[day].organicWeight,
            organicWeightColor: Color.primary[20],
            inorganicWeight: aggregatedData[day].inorganicWeight,
            inorganicWeightColor: Color.primary[60],
        }));

        setChartData(transformedData)
    }, [inboundDeliveryData])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>

            <Grid container
                className={`${appClasses.flexCenter} ${appClasses.alignCenter} ${appClasses.gap16}`}
                direction="column" >

                <div className={appClasses.containerWaste}>
                    <div>
                        Total Waste
                    </div>
                    <div>
                        {wasteData.length}
                    </div>
                </div>
            </Grid>

            <div className={`${appClasses.p8} ${appClasses.flexCenter} ${classes.titleDashboardContainer}`}>
                <Typography type={TypographyType.xLarge}>
                    Type Of Waste Comparison
                </Typography>
            </div>

            <ResponsiveBar
                data={chartData}
                keys={[
                    'rejectedWeight',
                    'organicWeight',
                    'inorganicWeight',
                ]}
                indexBy="day"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: Color.primary[0],
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: Color.primary[20],
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    // {
                    //     match: {
                    //         id: 'inorganicWeight'
                    //     },
                    //     id: 'lines'
                    // }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'day',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'waste Quantity',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Waste Comparison"
            />

        </div>
    )
}

export default MainPage;