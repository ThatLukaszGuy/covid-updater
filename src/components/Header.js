import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Link from '@mui/material/Link'

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
<AppBar position="sticky" sx={{
  bgcolor:'#F9FAFB',
  boxShadow: '0px 0px 0px 0px',
  marginBottom:'10px'

  
  }}>
      <Container  maxWidth='xl'>
        <Toolbar disableGutters sx={{display:'flex' , justifyContent: 'space-between'}}>
          <Typography
            variant="h6"
            noWrap
            color='primary'
            fontFamily='fontFamily'
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },fontWeight: 'bold'}}
          >
            Covid Updater
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color='primary'
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <Link href="#world" underline="none">
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color='blueGrey[500]'>Current World Stats</Typography>
                </MenuItem>
              </Link> 

              <Link href="#search" underline="none">
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color='blueGrey[500]'>Search by Country</Typography>
                </MenuItem>
              </Link> 
              
              <Link href="#about" underline="none">
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color='blueGrey[500]'>About</Typography>
                </MenuItem>
              </Link> 

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            color='primary'
            component="div"
            sx={{  display: { xs: 'flex', md: 'none' }, fontWeight: 'bold'}}
          >
            Covid Updater
          </Typography>
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>

              <Link href="#world" underline="none">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  Current World Stats
                </Button>
              </Link>

              <Link href="#search" underline="none">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  Search by country 
                </Button>
              </Link>
              
              
              <Link href="#about" underline="none">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  About 
                </Button>
              </Link>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}
