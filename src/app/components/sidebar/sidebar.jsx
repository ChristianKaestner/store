'use client';
import { Divider } from '@mui/material';
import { Aside } from './sidebar.styled';
import ProductsList from '../header/drawer/products/products';
import PriceFilter from '../filters/price/price';

export default function Sidebar() {
  return (
    <Aside>
      <PriceFilter />
    </Aside>
  );
}
