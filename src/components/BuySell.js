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
      <Button style={{maxWidth: '30px', maxHeight: '30px'}} color="secondary">Sell</Button>
      <Button  style={{maxWidth: '30px', maxHeight: '30px'}}size="small" color="primary"disabled>Buy</Button>
      <br></br>
      <MenuItem style={{maxWidth: '1000px', maxHeight: '20px'}}  size="small" value="Tom Reiven">
        <em>Product</em>
      </MenuItem>
      <br></br>
      <MenuItem style={{maxWidth: '100px', maxHeight: '20px'}} value="Tom Reiven">
        <em>Quantity</em>
      </MenuItem>

      <br></br>
      <Button style={{maxWidth: '30px', maxHeight: '20px'}}  variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}

export default BuySell;
