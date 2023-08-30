'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCart } from '@/app/hooks/useCart';
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
  const { cart } = useCart();

  const dispath = useDispatch();

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
            <MobileMenu toggle={() => dispath(toggleMobile(!mobileModal))} />
            <Logo />
            <ProductsButton
              onOpenProductsModal={() => dispath(toggleProducts(true))}
            />
            <SearchForm />

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <PersonalAccount
                onOpenAccountModal={() => dispath(toggleAccount(true))}
              />
              <CartIcon
                onOpenCartModal={() => dispath(toggleCart(true))}
                totalProducts={cart.length}
              />
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileModal}
            handleDrawerToggle={() => dispath(toggleMobile(!mobileModal))}
          />
          {productsModal && (
            <Modal
              onClose={() => dispath(toggleProducts(false))}
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
              onClose={() => dispath(toggleAccount(false))}
              title={login ? 'Log In' : 'Register'}
              width="600px"
              height="auto"
              position="center"
            >
              <Auth toggleAuth={() => setLogin(!login)} login={login} />
            </Modal>
          )}
          {cartModal && (
            <Modal
              onClose={() => dispath(toggleCart(false))}
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
