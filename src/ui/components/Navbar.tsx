
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { LocalPolice } from '@mui/icons-material';
import { AuthContext } from '../../auth/context/AuthContext';




const yourPages = [
  { text: 'Marvel', href: '/marvel' },
  { text: 'Dc comics', href: '/dc' },
  { text: 'Search', href: '/Search' },
 
]


const ResponsiveAppBar = () => {

  const { name, logOut } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleButtonClick = (urlPage: string) => {
    navigate(urlPage);
    setopen(false);
  }

  const [open, setopen] = useState(false);
  const DrawerMenu = () => {

    return (
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setopen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {
              yourPages.map((page) => (
                <ListItemButton
                  key={page.href}
                  onClick={() => handleButtonClick(page.href)}
                >
                  <ListItemText
                    primary={page.text}
                  />
                </ListItemButton>

              ))
            }
            {
              (name)
                ? (<ListItemButton
                  key={'logout'}
                  onClick={() => logOut()}
                >
                  <ListItemText
                    primary={'Logout'}
                  />
                </ListItemButton>)
                : (<ListItemButton
                  key={'Login'}
                  onClick={() => handleButtonClick('/login')}
                >
                  <ListItemText
                    primary={'Login'}
                  />
                </ListItemButton>)
            }
          </List>
        </Box>
      </Drawer>
    )
  }



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalPolice sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HeroesApp
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setopen(!open)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <DrawerMenu />

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              yourPages.map((page) => (
                <Button
                  key={page.href}
                  onClick={() => handleButtonClick(page.href)}
                  sx={{ my: 2, color: 'white', display: 'block', }}
                >
                  {page.text}
                </Button>

              ))
            }
            {
              (name)
                ? (<Button
                  key={'logout'}
                  onClick={() => logOut()}
                  sx={{ my: 2, color: 'white', display: 'block', }}
                >
                  {'Logout'}
                </Button>)
                : (<Button
                  key={'Login'}
                  onClick={() => handleButtonClick('/login')}
                  sx={{ my: 2, color: 'white', display: 'block', }}
                >
                 {'Login'}
                </Button>)
            }
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HeroesApp
          </Typography>


        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;
