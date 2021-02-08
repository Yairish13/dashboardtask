import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
      height:'auto',
      backgroundColor:"black",
      color:"white",
      fontFamily: 'Courier New',
      fontSize:"5px",
      alignItems: "center",

  },
});

function createData(username, time, info) {
  return { username, time, info };
}

const rows = [
  createData("davidz", "2021-01-06 01:11:23","alure jenson"),
  createData('royk2', "2021-01-06 01:11:23","data updated for him"),
  createData('Eclair', "2021-01-06 01:11:23", "stock purchase error"),
  createData('Cupcake',"2021-01-06 01:11:23", "balance is positive"),
];

export default function TableChart() {
  const classes = useStyles();

  return (
    <TableContainer  component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'grey',fontSize:"5px",height:"5px"}}>Username</TableCell>
            <TableCell style={{color: 'grey',fontSize:"5px",height:"5px"}}>Time</TableCell>
            <TableCell style={{color: 'grey',fontSize:"5px",height:"5px"}}>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{color: 'grey',fontSize:"5px",height:"10px"}} component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell style={{color: 'grey',fontSize:"5px",height:"10px",paddingRight:"80px"}} align="right">{row.time}</TableCell>
              <TableCell style={{color: 'orange',fontSize:"5px",height:"10px",paddingRight:"80px"}} align="right">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
