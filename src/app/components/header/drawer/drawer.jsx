'use client';

import { useState } from 'react';
import { Divider, Drawer, Typography } from '@mui/material';
import { LinkStyled } from './drawer.styled';
import { ListStyled, ItemText, IconHome, IconPay } from './drawer.styled';
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
}) {
  const [productsOpen, setProductsOpen] = useState(false);

  const handleProductsToggle = () => {
    setProductsOpen(!productsOpen);
  };

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
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
          <ProductsList />
        ) : (
          <ListStyled>
            <Item>
              <LinkStyled href="/">
                <IconHome />
                <ItemText>Home</ItemText>
              </LinkStyled>
            </Item>

            {isLogin ? (
              <Item>
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

            <Item>
              <LinkStyled href="/">
                <IconPay />
                <ItemText>Payment</ItemText>
              </LinkStyled>
            </Item>

            <Item>
              <LinkStyled href="/delivery">
                <IconShipping />
                <ItemText>Delivery</ItemText>
              </LinkStyled>
            </Item>

            <Item>
              <LinkStyled href="/contacts">
                <IconPhone />
                <ItemText>Contacts</ItemText>
              </LinkStyled>
            </Item>
          </ListStyled>
        )}
      </DrawerBlock>
    </Drawer>
  );
}
