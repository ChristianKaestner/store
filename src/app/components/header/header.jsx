'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useProducts } from '@/app/hooks/useProducts';
import { useModal } from '@/app/hooks/useModal';
import { toggleAccount, toggleProducts } from '@/app/redux/modal/slice';
import { toggleCart, toggleMobile } from '@/app/redux/modal/slice';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import MobileMenu from './mobileMenu/mobileMenu';
import DrawerMenu from './drawer/drawer';
import Logo from './logo/logo';
import ProductsButton from './productsButton/productsButton';
import ProductsModal from './productsModal/productsModal';
import SearchForm from './searchForm/searchForm';
import PersonalAccount from './personalAccount/personalAccount';
import CartIcon from './CartIcon/CartIcon';
import Modal from '../modal/modal';
import Auth from '../auth/auth';
import ShoppingCart from '../shoppingCart/shoppingCart';

export default function Header() {
  const [login, setLogin] = useState(true);
  const { cartModal, accountModal, mobileModal, productsModal } = useModal();
  const { cart } = useProducts();

  const dispath = useDispatch();

  const toggleAuth = () => {
    setLogin(!login);
  };

  const handleDrawerToggle = () => {
    dispath(toggleMobile(!mobileModal));
  };

  const onOpenProductsModal = () => {
    dispath(toggleProducts(true));
    document.body.style.overflow = 'hidden';
  };

  const onCloseProductsModal = () => {
    dispath(toggleProducts(false));
    document.body.style.overflow = 'scroll';
  };

  const onOpenAccountModal = () => {
    dispath(toggleAccount(true));
    document.body.style.overflow = 'hidden';
  };

  const onCloseAccountModal = () => {
    dispath(toggleAccount(false));
    document.body.style.overflow = 'scroll';
  };

  const onOpenCartModal = () => {
    dispath(toggleCart(true));
    document.body.style.overflow = 'hidden';
  };

  const onCloseCartModal = () => {
    dispath(toggleCart(false));
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
              <CartIcon
                onOpenCartModal={onOpenCartModal}
                totalProducts={cart.length}
              />
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileModal}
            handleDrawerToggle={handleDrawerToggle}
          />
          {productsModal && (
            <Modal
              onClose={onCloseProductsModal}
              title="Products"
              width="calc(100% - 48px)"
              height="600px"
              position="top"
            >
              <ProductsModal />
            </Modal>
          )}
          {accountModal && (
            <Modal
              onClose={onCloseAccountModal}
              title={login ? 'Log In' : 'Register'}
              width="600px"
              height="auto"
              position="center"
            >
              <Auth toggleAuth={toggleAuth} login={login} />
            </Modal>
          )}
          {cartModal && (
            <Modal
              onClose={onCloseCartModal}
              title="Cart"
              width="600px"
              height="600px"
              position="center"
            >
              <ShoppingCart />
            </Modal>
          )}
        </Container>
      </AppBar>
    </>
  );
}
