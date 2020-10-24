import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon
} from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { links } from './ImgLinks'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: '25px',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  },
  icons: {
    paddingRight: theme.spacing(4)
  },
  grow: {
    flexGrow: '1',
  },
  itemListText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingtBottom: 4
  }
}))

function Home() {
  const classes = useStyles()
  return (
    <>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} color="inherit">
            <MenuIcon />
          </IconButton>
          <img src={links.ytPreto} className={classes.logo} />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={< AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText classes={{ primary: classes.itemListText }} primary={"início"} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText classes={{ primary: classes.itemListText }} primary={"Em Alta"} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText classes={{ primary: classes.itemListText }} primary={"Inscrições"} />
            </ListItem>
          </List>
          <Divider />
          {/* 45 MIN DO VIDEO */}
        </div>
      </Drawer>
    </>
  )
}

export default Home;