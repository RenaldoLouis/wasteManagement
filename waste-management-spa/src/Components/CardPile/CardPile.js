import React from "react";
import Typography from '../../Components/Typography/Typography';
import { TypographyType } from '../../Constants/Typography';

import { useAppStyles } from '../../AppStyles';
import { useStyles } from './CardPileStyles';
import Grid from '@material-ui/core/Grid';

const CardPile = () => {
    const appClasses = useAppStyles();
    const classes = useStyles();
    return (
        <div className={`${classes.cardContainer}`} >
            <Grid className={`${appClasses.fullHeight} ${appClasses.alignCenter}`} container>
                <Grid item xs={3} className={`${appClasses.flexCenter}`}>
                    <div className={`${appClasses.flexCenter} ${appClasses.alignCenter} ${classes.cirlceCard}`}>
                        Pile1
                    </div>
                </Grid>
                <Grid item xs={9} className={appClasses.flexColumn}>
                    <Typography type={TypographyType.medium}>
                        Organic Compost Conversion
                    </Typography>
                    <Typography type={TypographyType.medium}>
                        Compost Date : 3 maret 2024
                    </Typography>
                    <Typography type={TypographyType.medium}>
                        estimation harvest Date : 3 maret 2024
                    </Typography>
                    <Typography type={TypographyType.medium}>
                        Status: 3 maret 2024
                    </Typography>
                    <Typography type={TypographyType.medium}>
                        Current Task : 3 maret 2024
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardPile;