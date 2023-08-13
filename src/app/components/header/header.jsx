'use client';

import { useState } from 'react';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import MobileMenu from './mobileMenu/mobileMenu';
import DrawerMenu from './drawer/drawer';
import Logo from './logo/logo';
import ProductsButton from './productsButton/productsButton';
import ProductsModal from './productsModal/productsModal';
import SearchForm from './searchForm/searchForm';
import PersonalAccount from './personalAccount/personalAccount';
import ShoppingCart from './shoppingCart/shoppingCart';
import Modal from '../modal/modal';
import Auth from '../auth/auth';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onOpenProductsModal = () => {
    setOpenProducts(true);
    document.body.style.overflow = 'hidden';
  };

  const onCloseProductsModal = () => {
    setOpenProducts(false);
    document.body.style.overflow = 'scroll';
  };

  const onOpenAccountModal = () => {
    setOpenAccount(true);
    document.body.style.overflow = 'hidden';
  };

  const onCloseAccountModal = () => {
    setOpenAccount(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <>
      <AppBar
        sx={{
          position: 'fixed',
          top: 0,
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
            <MobileMenu toggle={handleDrawerToggle} />
            <Logo />
            <ProductsButton onOpenProductsModal={onOpenProductsModal} />
            <SearchForm />

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <PersonalAccount onOpenAccountModal={onOpenAccountModal} />
              <ShoppingCart />
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          {openProducts && (
            <Modal
              onClose={onCloseProductsModal}
              width="calc(100% - 48px)"
              height="600px"
              position="top"
            >
              <ProductsModal />
            </Modal>
          )}
          {openAccount && (
            <Modal
              onClose={onCloseAccountModal}
              width="600px"
              height="auto"
              position="center"
            >
              <Auth />
            </Modal>
          )}
        </Container>
      </AppBar>
    </>
  );
}
