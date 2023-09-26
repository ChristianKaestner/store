'use client';

import { useState } from 'react';
import { Divider, Drawer, Typography, List } from '@mui/material';
import { LinkStyled } from './drawer.styled';
import ProductsList from './products/products';
import { visuallyHidden } from '@mui/utils';
import Logo from '../logo/logo';
import { DrawerBlock, ButtonToggle, IconApp, Item } from './drawer.styled';
import { ListStyled, ItemText, IconHome, IconPay } from './drawer.styled';
import { IconProfile, IconShipping, IconPhone } from './drawer.styled';

export default function DrawerMenu({
  mobileOpen,
  handleDrawerToggle,
  openAuth,
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

            <Item onClick={openAuth}>
              <IconProfile />
              <ItemText>Profile</ItemText>
            </Item>

            <Item>
              <LinkStyled href="/payment">
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
              <LinkStyled href="/contact">
                <IconPhone />
                <ItemText>Contact</ItemText>
              </LinkStyled>
            </Item>
          </ListStyled>
        )}
      </DrawerBlock>
    </Drawer>
  );
}
