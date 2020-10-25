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
  ListItemIcon,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden
} from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { links } from './ImgLinks'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
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
  },
  padTop: {
    paddingTop: 10
  },
  subHeader: {
    textTransform: 'uppercase'
  }
}))

function Home() {
  const classes = useStyles()

  let linhas = []
  for (let i = 0; i < 30; i++) {
    linhas.push(
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box>
          <img
            style={{ width: '100%' }}
            alt='Título genérico'
            src={links.thumb1}
          />
          <Box>
            <Typography
              style={{ fontWeight: 600 }}
              gutterBottom
              variant="body1"
              color="textPrimary"
            >
              Título do vídeo
            </Typography>
            <Typography
              display='block'
              variant="body2"
              color="textSecondary"
            >
              Título do vídeo
            </Typography>
            <Typography
              display='block'
              variant="body2"
              color="textSecondary"
            >
              10M ● Data de publicação
            </Typography>
          </Box>
        </Box>
      </Grid>
    )
  }

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
      <Box display='flex'>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              {/* MENU PRINCIPAL */}
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"início"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Em Alta"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Inscrições"} />
                </ListItem>
              </List>

              <Divider />

              {/* COISAS PESSOAIS */}
              <div className={classes.padTop} />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText classes={{ primary: classes.itemListText }} primary={"Em Alta"} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText classes={{ primary: classes.itemListText }} primary={"Inscrições"} />
              </ListItem>

              <Divider />

              {/* LOGIN */}
              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
                <Button
                  startIcon={< AccountCircle />}
                  variant="outlined"
                  color="secondary"
                >
                  Fazer Login
            </Button>
              </Box>

              <Divider />

              {/* RECOMENDAÇÕES */}
              <ListSubheader className={classes.subHeader}>
                O melhor do youtube
          </ListSubheader>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Música"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Esportes"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Jogos"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Filmes"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Notícias"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Ao vivo"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Destaques"} />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Vídeos 360"} />
                </ListItem>

                <Divider />

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemListText }} primary={"Procurar mais"} />
                </ListItem>
                <Divider />
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
            Recomendados
          </Typography>

          <Grid container spacing={3}>
            {
              linhas
            }
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home;