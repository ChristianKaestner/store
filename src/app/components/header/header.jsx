'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Divider, Drawer, IconButton } from '@mui/material';
import { List, ListItem, ListItemButton, Button } from '@mui/material';
import { ListItemText, Toolbar, Typography } from '@mui/material';
import DrawerMenu from '../drawer/drawer';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shop
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/">Home</Link>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/products">Products</Link>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/contact">Contact</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar>
        <Toolbar>
          {/* burger menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <p>Icon Button</p>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              <Link href="/">Home</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link href="/products">Products</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
// <AppBar position="static" component="nav">
// <Link href="/">Home</Link>
// <Link href="/products">Products</Link>
// </AppBar>
