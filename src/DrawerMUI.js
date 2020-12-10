import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import LockIcon from '@material-ui/icons/Lock'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import logo from './csit_logo.png';
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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles((theme: Theme) =>
      createStyles ({
mobileMenu:{
  justifyContent:"center",
  alignItems:"center",
  [theme.breakpoints.down('sm')]: {
  justifyContent:'left',
}},
menu: {
fontFamily:[ 'Nunito', 'sans-serif'],
paddingRight:'30px',
[theme.breakpoints.down('sm')]: {
  display:'none',
}},
menuIcon: {
marginRight:'30px',
marginLeft:'0px',
[theme.breakpoints.down('sm')]: {
  marginRight:'0px',
  paddingLeft:'0px!important',
}
},
logo: {
width:'30%',
[theme.breakpoints.down('sm')]: {
  width:'60%',
  paddingRight:'0px',
  float:'left',
}},
linkki: {
color:'#ed1c24',
fontSize:'1.1em',
textDecoration:'underline',
},
}));




function DrawerMUI () {

    const[open, setOpen] = useState(false);
    const handleOpen= () => { setOpen(true); }
    const handleClose= () => { setOpen(false); }

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  //  const [open, setOpen] = React.useState(false);
    const handleClick = (event) => {setAnchorEl(event.currentTarget);  };
    const handleCloseB = () => {setAnchorEl(null);  };
  const handleClickOpenDialog = () => {setOpen(true);  };
   const handleCloseDialog = () => {  setOpen(false);};

    return (
      <div>
      <MuiThemeProvider theme={ teema }>
        <AppBar position='static' color='white' elevation={0} >
          <Toolbar>
          <Grid container direction="row" className={ classes.mobileMenu}>
<Grid item>
            <IconButton className={ classes.menuIcon } onClick={handleOpen} color='inherit'>
            <MenuIcon fontSize="large" />
          </IconButton>
          </Grid>
<Grid item className={ classes.logo } ><Link to='/'>
<img src={logo} alt="csit logo" width="60%"/></Link>
</Grid>

<Grid item>
   <IconButton size="small" color="inherit" className={ classes.menu } onClick={handleClickOpenDialog}>
                <MailOutlineIcon />
            <text>Yhteys tukeen</text>
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
          <Button onClick={handleCloseDialog} className={'Primary'} color="secondary">
            Lähetä
  </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Peruuta
  </Button>
        </DialogActions>
      </Dialog>

        <IconButton className={ classes.menu } size="small" aria-controls="simple-menu" edge="start"  color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
            <ExitToAppIcon />
            <text>Kirjaudu ulos</text>
          </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseB}>
                <MenuItem onClick={handleCloseB} component={Link} to='/login' className={classes.linkki}>Haluatko varmasti kirjautua ulos?</MenuItem>
              </Menu>
              </Grid>
              </Grid>
              </Toolbar>
    <Drawer anchor='left'  open={open} onClick={handleClose} >
<List component='nav'>
<ListItem button component={Link} to='/'>
<ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
<ListItemText>Omat tiedot</ListItemText>
</ListItem>
<ListItem button component={Link} to='/muutospyynto'>
<ListItemIcon><CreateIcon color='primary'/></ListItemIcon>
<ListItemText>Työsuhdetietojen muutospyyntö</ListItemText>
</ListItem>
<ListItem button component={Link} to='/tilaatiedot'>
<ListItemIcon><ListIcon color='primary'/></ListItemIcon>
<ListItemText>Tilaa omat tiedot</ListItemText>
</ListItem>
<ListItem button component={Link} to='/uusisalasana'>
<ListItemIcon><LockIcon color='primary'/></ListItemIcon>
<ListItemText>Tilaa uusi salasana</ListItemText>
</ListItem>
<ListItem button component={Link} to='/otayhteytta'>
<ListItemIcon><MailOutlineIcon color='primary'/></ListItemIcon>
<ListItemText>Ota yhteyttä IT-tukeen</ListItemText>
</ListItem>
<ListItem button component={Link} to='/login'>
<ListItemIcon><ExitToAppIcon color='primary'/></ListItemIcon>
<ListItemText>Kirjaudu ulos</ListItemText>
</ListItem>
</List>
        </Drawer>

        </AppBar>
      </MuiThemeProvider>
      </div>
    );
}

export default DrawerMUI;
