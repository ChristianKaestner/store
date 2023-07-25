'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, IconButton, Button } from '@mui/material';
import { Toolbar, Typography } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DrawerMenu from './drawer/drawer';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuOutlinedIcon />
          </IconButton>

          <LogoDevIcon sx={{ display: { xs: 'none', sm: 'flex' } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button sx={{ color: '#fff' }}>
              <Link href="/">Home</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link href="/payment">Payment</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link href="/delivery">Delivery</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link href="/contact">Contact</Link>
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'end',
            }}
          >
            <IconButton color="inherit" aria-label="shoping basket">
              <Link href="/basket">
                <ShoppingBasketOutlinedIcon />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerMenu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
}
