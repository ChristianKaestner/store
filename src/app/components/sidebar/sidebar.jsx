'use client';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';
import ColorFilter from '../filters/color/color';
import StatusFilter from '../filters/status/status';

export default function Sidebar({ price, brands, weight, color, status }) {
  return (
    <Aside>
      {price && <PriceFilter from={3} to={3400} />}
      {brands && <BrandFilter />}
      {weight && <WeightFilter />}
      {color && <ColorFilter />}
      {status && <StatusFilter />}
    </Aside>
  );
}
