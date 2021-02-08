import React from "react";
import GridLayout from "./components/GridLayout";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import "./MainWrapper.css";
import './App.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
    height: "100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: "100%",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  item: {
    height: "100%",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className="main-wrapper">
      <Header />
      <div className="inner-wrapper">
        <div className="sidebar">
      <DashboardIcon style={{color:"white"}}/><br></br>
      <FormatAlignJustifyIcon style={{color:"white"}}/><br></br>
      <SwapHorizIcon style={{color:"white"}}/><br></br>
      <PersonIcon style={{color:"white"}}/><br></br>
      <PeopleIcon style={{color:"white"}}/><br></br>
        </div>
        <GridLayout className="layout" />
      </div>
    </div>
  );
}

export default App;
