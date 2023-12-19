'use client';

import { useState } from 'react';
import { Divider, SwipeableDrawer, Typography } from '@mui/material';
import { LinkStyled } from './drawer.styled';
import { ListStyled, ItemText, IconHome, IconCart } from './drawer.styled';
import { IconProfile, IconShipping, IconPhone } from './drawer.styled';
import { DrawerBlock, ButtonToggle, IconApp, Item } from './drawer.styled';
import ProductsList from './products/products';
import { visuallyHidden } from '@mui/utils';
import Logo from '../logo/logo';

export default function DrawerMenu({
  mobileOpen,
  handleDrawerToggle,
  openAuth,
  isLogin,
  handleOpenCart
}) {
  const [productsOpen, setProductsOpen] = useState(false);

  const handleProductsToggle = () => {
    setProductsOpen(!productsOpen);
  };

  const onCartClick = () => {
    handleDrawerToggle()
    handleOpenCart()
  }

  return (
    <SwipeableDrawer
      variant="temporary"
      open={mobileOpen}
      onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <DrawerBlock component="nav">
        <Typography component="h1" sx={visuallyHidden}>
          Hookah for you, hookah store
        </Typography>
        <Logo isMobile={true} />
        <ButtonToggle
          color="inherit"
          aria-label="shoping basket"
          onClick={handleProductsToggle}
        >
          <IconApp />
          {productsOpen ? 'Main menu' : 'Products'}
        </ButtonToggle>

        <Divider />
        {productsOpen ? (
          <ProductsList handleDrawerToggle={handleDrawerToggle} />
        ) : (
          <ListStyled>
            <Item onClick={handleDrawerToggle}>
              <LinkStyled href="/">
                <IconHome />
                <ItemText>Home</ItemText>
              </LinkStyled>
            </Item>

            {isLogin ? (
              <Item onClick={handleDrawerToggle}>
                <LinkStyled href="/profile/settings">
                  <IconProfile />
                  <ItemText>Profile</ItemText>
                </LinkStyled>
              </Item>
            ) : (
              <Item onClick={openAuth}>
                <IconProfile />
                <ItemText>Login</ItemText>
              </Item>
            )}

            <Item onClick={onCartClick}>
              <IconCart />
              <ItemText>Cart</ItemText>
            </Item>

            <Item onClick={handleDrawerToggle}>
              <LinkStyled href="/delivery">
                <IconShipping />
                <ItemText>Delivery</ItemText>
              </LinkStyled>
            </Item>

            <Item onClick={handleDrawerToggle}>
              <LinkStyled href="/contacts">
                <IconPhone />
                <ItemText>Contacts</ItemText>
              </LinkStyled>
            </Item>
          </ListStyled>
        )}
      </DrawerBlock>
    </SwipeableDrawer>
  );
}
