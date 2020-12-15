//csit itsepalveluportaalin proto
//kenttien tiedot poimittu https://github.com/esapetri/pySCIM/blob/master/scim_server/data/users/root.json

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from './csit_logo.png';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import {Link} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const teema = createMuiTheme({
  palette: {

    primary: {
      main: '#414042', contrastText: 'white'
    },
    secondary: {
      main: '#ed1c24', contrastText: 'white'
    },
    action: {hover: '#eeeeee', active: '#eeeeee'},
    background: {default: '#eeeeee'}
  },typography:{
    fontFamily:[ 'Nunito', 'sans-serif']
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#41402',
    },
    secondary: {
      main: '#ed1c24',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.5),
      width: '30ch',
      borderRadius:'20px',
      padding:'10px',
    },
  },
}));

export default function CSIT_proto() {
  const classes = useStyles();


  return (
    <div>
    <MuiThemeProvider theme={ teema }>
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <br /><br /><br /><br />
          <h3>Kirjaudu sisään</h3>
          <TextField id="username" label="Käyttäjätunnus" placeholder="marko.menninkäinen@csit.fi" /><br />
          <TextField id="salasana" label="Salasana" placeholder="*****" />
          <br />

          <br />
          <Button variant="contained" color="primary" component={Link} to='/' size="small">
            Kirjaudu
      </Button>
<br /> <p>Unohditko salasanasi?</p>
        </form>
      </Grid>
  </MuiThemeProvider>
  </div>
  );
};
