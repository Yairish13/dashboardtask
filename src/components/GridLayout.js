import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CandleStick from "./CandleStick";
import DailyVolume from "./DailyVolume";
import Button from "@material-ui/core/Button";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TableChart from "./TableChart";
import BuySell from "./BuySell";

const useStyles = makeStyles((theme) => ({
  layout:{
    height:"100px"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(1),
    height: "100%",
  },
  firstRow: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "120px",
    backgroundColor: "#323232",
  },
  secondRow: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "200px",
    backgroundColor: "#323232",
  },
  secondMid: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "60px",
    backgroundColor: "#323232",
    width: "95%",
  },
  thirdMid: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "40px",
    backgroundColor: "#323232",
    width: "100%",
  },
  thirdRow: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "70px",
    backgroundColor: "#323232",
  },
  middleRow: {
    paddingBottom: "15px",
    fontSize: "10px",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0),
    height: "10px",
    backgroundColor: "#262626",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(0),
  },
}));

export default function GridLayout() {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Typography variant="subtitle1" gutterBottom></Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.middleRow}>
            <span>Dashboard 1, Dashboard 2</span>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<ViewModuleIcon />}
            >
              Add Widget
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={5} sm={2.5}>
          <Paper className={classes.firstRow}></Paper>
        </Grid>
        <Grid item xs={2} sm={2}>
          <BuySell className={classes.firstRow}></BuySell>
        </Grid>
        <Grid item xs={4} sm={4}>
          <TableChart
            style={{ height: "100px" }}
            className={classes.firstRow}
          ></TableChart>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1}>
          <Paper className={classes.secondRow}></Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <CandleStick className={classes.secondRow} />
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex"
          marginRight="auto"
          item
          xs={3}
        >
          <Paper className={classes.secondMid}></Paper>
          <Grid item xs={7} sm={7}>
            <Paper marginLeft="auto" className={classes.thirdMid}></Paper>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1}>
          <Paper className={classes.secondRow}></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <DailyVolume className={classes.thirdRow}></DailyVolume>
        </Grid>
        <Grid item xs={3} >
          <Paper className={classes.thirdRow}></Paper>
        </Grid>
        <Grid item xs={3} >
          <Paper className={classes.thirdRow}></Paper>
        </Grid>
        <Grid item xs={3} >
          <Paper className={classes.thirdRow}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
