import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      height:"100%",
      justifyContent:"center",
      backgroundColor: '#323232'
    },
  },
}));

const style={
    textAlign:"center",
    backgroundColor:'#323232'
}
function BuySell() {
  const classes = useStyles();

  return (
    <div style={style}>
      <Button size="small" color="secondary">Sell</Button>
      <Button size="small" color="primary"disabled>Buy</Button>
      <br></br>
      <MenuItem  size="small" value="Tom Reiven">
        <em>Product</em>
      </MenuItem>

      <br></br>
      <Button size="small" variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}

export default BuySell;
