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

import { createMuiTheme } from '@material-ui/core/styles';

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
      margin: theme.spacing(1),
      width: '25ch',
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
      <AppBar position="static" color="white" elevation={0}>
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
          <Grid item>
            <img src={logo} alt="csit logo meni särki" width="40%" /> {/* jos useampia sivuja niin tästä koti-nappi */}
          </Grid>
          <Grid item>
            <Toolbar>
              <IconButton size="small" color="inherit" onClick={handleClickOpen}>
                <MailOutlineIcon />
            Yhteys tukeen
      </IconButton>
              <Dialog id="it-tuki" open={open} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ota yhteyttä IT-tukeen</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Kirjoita viestisi alla olevaan kenttään niin se siirtyy automaagisesti IT-tuelle.
          </DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Viestisi" type="email" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="secondary">
                    Lähetä
          </Button>
                  <Button onClick={handleCloseDialog} color="primary">
                    Peruuta
          </Button>
                </DialogActions>
              </Dialog>
              
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <br /><br /><br /><br /><br /><br /><br />
          <h3>Kirjaudu sisään</h3>
          <TextField id="username" label="Käyttäjätunnus" InputProps={{ readOnly: true, }} defaultValue="marko.menninkäinen@csit.fi" /><br />
          <TextField id="salasana" label="Salasana" InputProps={{ readOnly: true, }} defaultValue="*****" />
          <br />
          
          <br /><br />
          <Button variant="contained" color="primary" onClick={handleClickOpen} size="small">
            Kirjaudu
      </Button>
          
        </form>
      </Grid>
    </div>
  );
}
