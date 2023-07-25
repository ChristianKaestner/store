'use client';

import { useState } from 'react';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import { List, ListItem, Button } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { LinkStyled } from './drawer.styled';
import ProductsList from './products/products';

export default function DrawerMenu({ mobileOpen, handleDrawerToggle }) {
  const [productsOpen, setProductsOpen] = useState(false);

  const handleProductsToggle = () => {
    setProductsOpen(!productsOpen);
  };

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ width: { xs: 240, md: 300, xl: 360 } }}>
          <Typography variant="h6" component="h1" sx={{ my: 2, mx: 2 }}>
            My Shop
          </Typography>

          <Button
            color="inherit"
            aria-label="shoping basket"
            sx={{ ml: 2, pl: 0 }}
            onClick={handleProductsToggle}
          >
            <AppsIcon sx={{ mr: 2 }} />
            {productsOpen ? 'Main menu' : 'Products'}
          </Button>

          <Divider />
          {productsOpen ? (
            <ProductsList />
          ) : (
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem>
                <LinkStyled href="/">
                  <HomeIcon sx={{ mr: 2 }} />
                  Home
                </LinkStyled>
              </ListItem>

              <ListItem>
                <LinkStyled href="/payment">
                  <PaymentIcon sx={{ mr: 2 }} />
                  Payment
                </LinkStyled>
              </ListItem>

              <ListItem>
                <LinkStyled href="/delivery">
                  <LocalShippingIcon sx={{ mr: 2 }} />
                  Delivery
                </LinkStyled>
              </ListItem>

              <ListItem>
                <LinkStyled href="/contact">
                  <PhoneIcon sx={{ mr: 2 }} />
                  Contact
                </LinkStyled>
              </ListItem>
            </List>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
