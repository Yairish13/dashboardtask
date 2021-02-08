import React from "react";
import "../header.css";
import enigma from "./enigma.png";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Header() {
    const classes = useStyles();

  return (
    <div className="headerDiv">
      <div>
        {" "}
        <img src={enigma} alt="enigmaPic" />
        <span className="dashboardTitle">Dashboard</span>
      </div>
      <span className="headerDate">3:02:22 PM wednesday, December 16 2020</span>
      <FormControl className={classes.formControl}>
      <MenuItem value="Tom Reiven">
          <AccountCircleIcon/>
            <em>Tom Reiven</em>
          </MenuItem>
    </FormControl>
    </div>
  );
}

export default Header;
