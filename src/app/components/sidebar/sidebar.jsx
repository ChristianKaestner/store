'use client';
import { Divider } from '@mui/material';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';

export default function Sidebar() {
  return (
    <Aside>
      <PriceFilter from={3} to={3400} />
      <BrandFilter />
      <WeightFilter />
    </Aside>
  );
}
