'use client';
import { v4 as uuidv4 } from 'uuid';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';
import ColorFilter from '../filters/color/color';
import StatusFilter from '../filters/status/status';

//need to add Skeleton
export default function Sidebar({ goods }) {
  const prices = [];
  const colors = [];
  const brands = [];
  const weights = [];
  const statuses = [];

  goods.forEach(product => {
    const { price, color, brand, weight, status } = product;
    if (price) {
      prices.push(price);
    }
    if (color) {
      if (!colors.find(n => n.color === color)) {
        colors.push({ id: uuidv4(), color });
      }
    }
    if (brand) {
      if (!brands.find(n => n.brand === brand)) {
        brands.push({ id: uuidv4(), brand });
      }
    }
    if (weight) {
      if (!weights.find(n => n.weight === weight)) {
        weights.push({ id: uuidv4(), weight });
      }
    }
    if (status) {
      if (!statuses.find(n => n.status === status)) {
        statuses.push({ id: uuidv4(), status });
      }
    }
  });

  return (
    <Aside>
      {prices.length > 0 && <PriceFilter items={prices} />}
      {brands.length > 0 && <BrandFilter items={brands} />}
      {weights.length > 0 && <WeightFilter items={weights} />}
      {colors.length > 0 && <ColorFilter items={colors} />}
      {statuses.length > 0 && <StatusFilter items={statuses} />}
    </Aside>
  );
}
