'use client';

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useCart } from '@/app/hooks/useCart';
import { useModal } from '@/app/hooks/useModal';
import { useAuth } from '@/app/hooks/useAuth';
import { refreshUser } from '@/app/redux/auth/operations';
import { toggleAccount, toggleProducts } from '@/app/redux/modal/slice';
import { toggleCart, toggleMobile } from '@/app/redux/modal/slice';
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
  const dispath = useDispatch();

  useEffect(() => {
    dispath(refreshUser());
    console.log(isLogin);
  }, []);

  const handleCloseModal = () => {
    dispath(toggleProducts(false));
  };

  const handleAuth = () => {
    if (isLogin) {
      console.log('redirect');
      redirect('/profile/settings');
    } else {
      dispath(toggleAccount(true));
      dispath(toggleMobile(false));
    }
  };

  return (
    <>
      <AppBar>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Toolbar style={{ padding: 0 }}>
            <MobileMenu toggle={() => dispath(toggleMobile(!mobileModal))} />
            <Logo isMobile={false} />
            <ProductsButton
              onOpenProductsModal={() => dispath(toggleProducts(true))}
            />
            <SearchForm />

            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <PersonalAccount onOpenAccountModal={handleAuth} />
              <CartIcon
                onOpenCartModal={() => dispath(toggleCart(true))}
                totalProducts={cart.length}
              />
            </Box>
          </Toolbar>
          <DrawerMenu
            mobileOpen={mobileModal}
            handleDrawerToggle={() => dispath(toggleMobile(!mobileModal))}
            openAuth={handleAuth}
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
              close={() => dispath(toggleAccount(false))}
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
              close={() => dispath(toggleCart(false))}
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
