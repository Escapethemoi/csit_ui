//csit itsepalveluportaalin proto
//kenttien tiedot poimittu https://github.com/esapetri/pySCIM/blob/master/scim_server/data/users/root.json

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
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
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import DrawerMUI from './DrawerMUI';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './csit.css';
import Omattiedot from './components/Omattiedot';
import Tilaatiedot from './components/Tilaatiedot';
import Login from './components/Login';
import Paivityspyynto from './components/Paivityspyynto';

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

const useStyles = makeStyles((teema) => ({
  root: {
    '& > *': {
      margin: teema.spacing(1),
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
          <MuiThemeProvider theme={ teema }>
          <div>
          <BrowserRouter>
              <DrawerMUI />
              <Switch>
                <Route exact path='/' component={omattiedot}/>
                <Route path='/paivityspyynto' component={Paivityspyynto}/>
                <Route path='/tilaatiedot' component={Tilaatiedot}/>
              <Route path='/kirjauduulos' component={Login}/>
              </Switch>
              </BrowserRouter>
                </div>
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
                    Kirjoita viestisi alla olevaan kenttään niin se siirtyy automaattisesti IT-tuelle.
          </DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Viestisi" type="email" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} className={'Primary'} color="secondary">
                    Lähetä
          </Button>
                  <Button onClick={handleCloseDialog} color="primary">
                    Peruuta
          </Button>
                </DialogActions>
              </Dialog>
              <IconButton size="small" aria-controls="simple-menu" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
                <ExitToAppIcon />
                Kirjaudu ulos
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Kirjaudu ulos</MenuItem>
              </Menu>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <br />
          <h3>Omat tiedot</h3>
          <input className="e-input" type="text" placeholder="Enter Name" value="John" readOnly= {true}/>
      <input type='text' required = {true} readOnly = {true} value="John" />
      <TextField id="username" label="Käyttäjätunnus" readOnly= {true} defaultValue="marko.menninkäinen@csit.fi" />
          <TextField id="socialSecurityCode" label="Henkilötunnus" InputProps={{ readOnly: true, }} defaultValue="123456-1234" />
          <br />
          <TextField id="familyName" label="Sukunimi" defaultValue="Menninkäinen" />
          <TextField id="firstNames" label="Etunimet" defaultValue="Jouni Marko Mikael" />
          <TextField id="nickName" label="Kutsumanimi" defaultValue="Lil'Marko" />
          <br />
          <TextField id="address" label="Osoite" defaultValue="Metsätölli 2 B" />
          <TextField id="postalCode" label="Postinumero" defaultValue="00520" />
          <TextField id="PostalDistrict" label="Postitoimipaikka" defaultValue="Metsälä" />
          <br /><h3>Työsuhdetiedot</h3>
          <TextField id="LanguageCode" label="Kielikoodi" InputProps={{ readOnly: true, }} defaultValue="A1" />
          <TextField id="LanguageCodeDescription" label="Kielikuvaus" InputProps={{ readOnly: true, }} defaultValue="Kotimaiset kielet" />
          <br />
          <TextField id="workPeriodId" label="Työjaksokoodi" InputProps={{ readOnly: true, }} defaultValue="B2" />
          <TextField id="workPeriodDescription" label="Työjaksokuvaus" InputProps={{ readOnly: true, }} defaultValue="Töissä" />
          <br />
          <TextField id="OficialJobDescription" label="Virallinen kuvaus" InputProps={{ readOnly: true, }} defaultValue="IT-konsultti" />
          <TextField id="workDepartment" label="Osasto" InputProps={{ readOnly: true, }} defaultValue="Toimisto" />
          <br />
          <TextField id="workPeriodStartDate" label="Työsuhteen alku" InputProps={{ readOnly: true, }} defaultValue="01.01.2016" /> {/* tähän kalenteri */}
          <TextField id="workPeriodEndDate" label="Työsuhteen loppu" InputProps={{ readOnly: true, }} defaultValue="Toistaiseksi" />
          <TextField id="workPeriodStatus" label="Työsuhteen status" InputProps={{ readOnly: true, }} defaultValue="Kyllä" />
          <br />
          <TextField id="isSupervisorc" label="Onko esimies" InputProps={{ readOnly: true, }} defaultValue="Ei" /> {/* tähän true/false */}
          <TextField id="idOfSupervisor" label="Esimiehen ID" InputProps={{ readOnly: true, }} defaultValue="007" />
          <br /><br />
          <Button variant="contained" color="primary" onClick={handleClickOpen} size="small">
            Tallenna
      </Button>
          <Dialog id="tallennusvarmistus" open={open} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Tallennetaanko tiedot?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Tarkista että kaikki muutetut tiedot ovat oikein.
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
        </form>
      </Grid>
      </MuiThemeProvider>
    </div>

  );
}
