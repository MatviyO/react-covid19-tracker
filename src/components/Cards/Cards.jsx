import React from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css';
import CountUp from "react-countup";
import cs from 'classnames';


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    const confirmedValue  = confirmed || {value: 0};
    const recoveredValue  = recovered || {value: 0};
    const deathsValue  = deaths || {value: 0};
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}   className={cs(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>Injected</Typography>
                        <Typography variant={"h5"}><CountUp start={0} end={confirmedValue.value} duration={2.5} separator="," /> </Typography>
                        <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant={"body1"}>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}  className={cs(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>Recovered</Typography>
                        <Typography variant={"h5"}><CountUp start={0} end={recoveredValue.value} duration={2.5} separator="," /></Typography>
                        <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant={"body1"}>Number of recoveries cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}  className={cs(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>Deaths</Typography>
                        <Typography variant={"h5"}><CountUp start={0} end={deathsValue.value} duration={2.5} separator="," /></Typography>
                        <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant={"body1"}>Number of deaths cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;
