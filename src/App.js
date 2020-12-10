//csit itsepalveluportaalin proto
//kenttien tiedot poimittu https://github.com/esapetri/pySCIM/blob/master/scim_server/data/users/root.json

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
import Paivityspyynto from './components/Paivityspyynto';
import Tilaatiedot from './components/Tilaatiedot';
import Login from './components/Login';
import Omattiedot from './components/Omattiedot';

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



function App() {


  return (

          <div>
          <MuiThemeProvider theme={ teema }>
      <AppBar position="static" color="white" elevation={0}>

        <BrowserRouter>
            <DrawerMUI />
            <Switch>
              <Route exact path='/'component={Omattiedot}/>
              <Route path='/paivitysspyynto' component={Paivityspyynto}/>
              <Route path='/tilaatiedot' component={Tilaatiedot}/>
            <Route path='/login' component={Login}/>
            </Switch>
            </BrowserRouter>

            <Toolbar>
            </Toolbar></AppBar>



      </MuiThemeProvider>
    </div>

  );
}
export default App;
