'use client';

import { Divider } from '@mui/material';
import { Aside } from './sidebar.styled';
import ProductsList from '../header/drawer/products/products';

export default function Sidebar() {
  return (
    <Aside>
      <ProductsList />
      <Divider orientation="vertical" textAlign="right" />
    </Aside>
  );
}
