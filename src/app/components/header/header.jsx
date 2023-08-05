'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';
import { Button, IconButton, Container, Badge } from '@mui/material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DrawerMenu from './drawer/drawer';
import Modal from '../modal/modal';
import ProductsModal from './productsModal/productsModal';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProductsToggle = () => {
    setOpenProducts(!openProducts);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          position: 'fixed',
          direction: 'flex',
          justifyContent: 'center',
          height: 72,
          px: 0,
          bgcolor: 'primary.main',
          zIndex: 999,
        }}
      >
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Toolbar style={{ padding: 0 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: 1, sm: 2 }, pr: 0 }}
            >
              <MenuOutlinedIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <Link
              href="/"
              style={{ display: 'flex', alignItems: 'center', height: 40 }}
            >
              <LogoDevIcon sx={{ fontSize: 40, mr: 1 }} />

              <Typography
                variant="h5"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  fontSize: '30px',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                LOGO
              </Typography>
            </Link>

            <Button
              variant="contained"
              startIcon={<AppsIcon />}
              sx={{
                height: 40,
                mr: 2,
                minWidth: 100,
                display: { xs: 'none', sm: 'flex' },
                bgcolor: 'primary.light',
              }}
              onClick={handleProductsToggle}
            >
              Products
            </Button>

            <FormControl
              variant="outlined"
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
                mr: 2,
              }}
            >
              <OutlinedInput
                placeholder="search..."
                type="text"
                aria-label="search items"
                sx={{ flexGrow: 1, height: 40, pr: 0, background: '#fff' }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <Button
                    position="end"
                    variant="contained"
                    sx={{
                      height: '100%',
                      color: '#fff',
                      bgcolor: 'primary.light',
                    }}
                  >
                    Find
                  </Button>
                }
              />
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <IconButton
                color="inherit"
                aria-label="personal account"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <AccountCircleOutlinedIcon sx={{ fontSize: 40 }} />
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="shoping cart"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          {openProducts && (
            <Modal onClose={handleProductsToggle}>
              <ProductsModal />
            </Modal>
          )}
        </Container>
      </AppBar>
    </>
  );
}
