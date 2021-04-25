import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./appbar.css";
import palette from '../../assets/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
   // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "bold",
    color: palette.TEXT
  },
  toolbarstyles: {
    background: "#a33fa394",    
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarstyles}>
          <Typography variant="h6" className={classes.title}>
            Freely Trip
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

