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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
      borderRadius:'20px',
      padding:'10px',
    },
  },
  saate:{
    width:'60ch',
    [theme.breakpoints.down('sm')]: {
      width:'30ch',
    },
  },
  }));

export default function CSIT_proto() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center" padding="10px">
        <form className={classes.root} noValidate autoComplete="off" justify="center">
        <Grid item className={classes.saate}>
          <h3>Ota yhteyttä IT-tukeen</h3>
          <p>Jos sinun tarvitsee saada yhteys IT-tukeen koskien muita asioita, kuin portaalin palveluita, voit kirjoittaa viestisi allaolevaan kenttään. Palaamme sinulle sähköpostitse mahdollisimman pian.</p>
          </Grid>
            <Grid item className={classes.root}>
          <TextField id="name" label="Nimi" InputProps={{ readOnly: true, }} defaultValue="Marko Menninkäinen" />
          <br/>
          <TextField id="username" label="Käyttäjätunnus" InputProps={{ readOnly: true, }} defaultValue="marko.menninkäinen@csit.fi" />
          <br/>
          <TextField id="outlined-multiline-static" label="Viesti" multiline rows={5} defaultValue="Kirjoita viestisi tähän" variant="outlined" />
          <br /><br />
          <Button variant="contained" color="primary" onClick={handleClickOpen} size="small">
            Lähetä
      </Button>
          <Dialog id="tallennusvarmistus" open={open} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Lähetetäänkö viesti?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Tiedot lähetetään sinulle sähköpostitse.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Tallenna
          </Button>
              <Button onClick={handleCloseDialog} color="secondary" autoFocus>
                Peruuta
          </Button>
            </DialogActions>
          </Dialog>
          <Button variant="contained" color="secondary" size="small">
            Peruuta
      </Button>
      </Grid>
        </form>
      </Grid>
    </div>
  );
}
