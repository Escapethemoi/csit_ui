//csit itsepalveluportaalin proto
//kenttien tiedot poimittu https://github.com/esapetri/pySCIM/blob/master/scim_server/data/users/root.json

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
}));
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#4634ad',
      fontWeight:'bold',
    },
    //  '& fieldset': {  color: '#4634ad!important',    backgroundColor: '#4634ad!important',  },
      '& input:focus + fieldset': {
        borderColor: '#4634ad!important',
        //  backgroundColor: '#d4dbef',
            outlineColor: '#4634ad!important',
      },
      '& input:active + fieldset': {
        borderColor: '#4634ad!important',
        //  backgroundColor: '#d4dbef',
          outlineColor: '#4634ad!important',
      },
      '& input:active': {
          backgroundColor: '#d4dbef',
      },
      '& input:focus': {
          backgroundColor: '#d4dbef',
      },
    },
})(TextField);

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

          <div id="container">
          <MuiThemeProvider theme={ teema }>

      <Grid container direction="row" justify="center" alignItems="center" padding="10px">
        <form className={classes.root} noValidate autoComplete="off">
          <br />
          <span class="otsikko"><h3>Omat tiedot</h3></span>
          <TextField disabled id="username" label="Käyttäjätunnus" defaultValue="marko.menninkäinen@csit.fi" />
          <TextField disabled id="socialSecurityCode" label="Henkilötunnus" defaultValue="123456-1234" />
          <br />
          <CssTextField id="familyName" label="Sukunimi" variant="outlined" defaultValue="Menninkäinen" />
          <CssTextField id="firstNames" label="Etunimet" variant="outlined" defaultValue="Jouni Marko Mikael" />
          <CssTextField id="nickName" label="Kutsumanimi" variant="outlined" defaultValue="Lil'Marko" />
          <br />
          <CssTextField id="address" label="Osoite" variant="outlined" defaultValue="Metsätölli 2 B" />
          <CssTextField id="postalCode" label="Postinumero" variant="outlined" defaultValue="00520" />
          <CssTextField id="PostalDistrict" label="Postitoimipaikka" variant="outlined" defaultValue="Metsälä" />
          <CssTextField id="PhoneNumber" label="Puhelinnumero" variant="outlined" defaultValue="040 5123 654" />
          <br />
          <span class="disabled"><h3>Työsuhdetiedot</h3></span>
          <TextField disabled id="LanguageCode" label="Kielikoodi" InputProps={{ readOnly: true, }} defaultValue="A1" />
          <TextField disabled id="LanguageCodeDescription" label="Kielikuvaus" InputProps={{ readOnly: true, }} defaultValue="Kotimaiset kielet" />
          <br />
          <TextField disabled id="workPeriodId" label="Työjaksokoodi" InputProps={{ readOnly: true, }} defaultValue="B2" />
          <TextField disabled id="workPeriodDescription" label="Työjaksokuvaus" InputProps={{ readOnly: true, }} defaultValue="Töissä" />
          <br />
          <TextField disabled id="OficialJobDescription" label="Virallinen kuvaus" InputProps={{ readOnly: true, }} defaultValue="IT-konsultti" />
          <TextField disabled id="workDepartment" label="Osasto" InputProps={{ readOnly: true, }} defaultValue="Toimisto" />
          <br />
          <TextField disabled id="workPeriodStartDate" label="Työsuhteen alku" InputProps={{ readOnly: true, }} defaultValue="01.01.2016" /> {/* tähän kalenteri */}
          <TextField disabled id="workPeriodEndDate" label="Työsuhteen loppu" InputProps={{ readOnly: true, }} defaultValue="Toistaiseksi" />
          <TextField disabled id="workPeriodStatus" label="Työsuhteen status" InputProps={{ readOnly: true, }} defaultValue="Kyllä" />
          <br />
          <TextField disabled id="isSupervisorc" label="Onko esimies" InputProps={{ readOnly: true, }} defaultValue="Ei" /> {/* tähän true/false */}
          <TextField disabled id="idOfSupervisor" label="Esimiehen ID" InputProps={{ readOnly: true, }} defaultValue="007" />
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
              <Button onClick={handleCloseDialog} border-radius="20px!important" color="primary">
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
