'use client';
import { Divider } from '@mui/material';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';

export default function Sidebar() {
  return (
    <Aside>
      <PriceFilter from={3} to={3400} />
      <BrandFilter />
    </Aside>
  );
}
