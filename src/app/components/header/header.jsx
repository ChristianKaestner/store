'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCart } from '../../hooks/useCart';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';
import { toggleAccount, toggleProducts } from '../../redux/modal/slice';
import { toggleCart, toggleMobile } from '../../redux/modal/slice';
import { Container, Toolbar, Box } from '@mui/material';
import MobileMenu from './mobileMenu/mobileMenu';
import DrawerMenu from './drawer/drawer';
import Logo from './logo/logo';
import ProductsButton from './productsButton/productsButton';
import ProductsModal from './productsModal/productsModal';
import SearchForm from './searchForm/searchForm';
import PersonalAccount from './personalAccount/personalAccount';
import CartIcon from './CartIcon/CartIcon';
import Auth from '../auth/auth';
import ShoppingCart from '../shoppingCart/shoppingCart';
import { AppBar } from './header.styled';
import Modal from '../modal/modal';

export default function Header() {
  const [login, setLogin] = useState(true);
  const { cartModal, accountModal, mobileModal, productsModal } = useModal();
  const { cart } = useCart();
  const { isLogin } = useAuth();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleProducts(false));
  };

  const handleAuth = () => {
    dispatch(toggleAccount(true));
    dispatch(toggleMobile(false));
  };

  return (
    <>
      <AppBar>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Toolbar style={{ padding: 0 }}>
            <MobileMenu toggle={() => dispatch(toggleMobile(!mobileModal))} />
            <Logo isMobile={false} />
            <ProductsButton
              onOpenProductsModal={() => dispatch(toggleProducts(true))}
            />
            <SearchForm />

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <PersonalAccount
                onOpenAccountModal={handleAuth}
                isLogin={isLogin}
              />
              <CartIcon
                onOpenCartModal={() => dispatch(toggleCart(true))}
                totalProducts={cart.length}
              />
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileModal}
            handleDrawerToggle={() => dispatch(toggleMobile(!mobileModal))}
            openAuth={handleAuth}
            isLogin={isLogin}
          />
          {productsModal && (
            <Modal
              open={productsModal}
              close={handleCloseModal}
              title="Products"
              width="calc(100% - 48px)"
              height="600px"
              position="top"
            >
              <ProductsModal handleCloseModal={handleCloseModal} />
            </Modal>
          )}
          {accountModal && (
            <Modal
              open={accountModal}
              close={() => dispatch(toggleAccount(false))}
              title={login ? 'Log In' : 'Register'}
              width="600px"
              position="center"
            >
              <Auth toggleAuth={() => setLogin(!login)} login={login} />
            </Modal>
          )}
          {cartModal && (
            <Modal
              open={cartModal}
              close={() => dispatch(toggleCart(false))}
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
