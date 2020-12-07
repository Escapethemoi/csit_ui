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
//import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';



function DrawerMUI () {
    const[open, setOpen] = useState(false);
    const handleOpen= () => { setOpen(true); }
    const handleClose= () => { setOpen(false); }
    //const classes = useStyles();

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={handleOpen} color='inherit'><MenuIcon /></IconButton>
          </Toolbar>
        </AppBar>
    <Drawer anchor='left' open={open} onClick={handleClose}>
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
<ListItem button component={Link} to='/kirjauduulos'>
<ListItemIcon><LockIcon color='primary'/></ListItemIcon>
<ListItemText>Kirjaudu ulos</ListItemText>
</ListItem>
</List>
        </Drawer>
      </div>
    );
}

export default DrawerMUI;
