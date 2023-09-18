'use client';
import { v4 as uuidv4 } from 'uuid';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';
import ColorFilter from '../filters/color/color';
import StatusFilter from '../filters/status/status';
import FlavorFilter from '../filters/flavor/flavor';
import SizeFilter from '../filters/size/size';
import TypeFilter from '../filters/type/type';
import { addCount } from '@/app/lib/functions';

//need to add Skeleton
export default function Sidebar({ goods }) {
  const prices = [];
  const colorsArr = [];
  const brands = [];
  const weights = [];
  const statuses = [];
  const flavors = [];
  const sizes = [];
  const types = [];

  goods.forEach(product => {
    const { price, colors, brand, weight, status, flavor, size, type } =
      product;

    if (price) {
      prices.push(price);
    }
    if (colors) {
      colors.forEach(color => {
        if (!colorsArr.includes(color)) {
          colorsArr.push(color);
        }
      });
    }
    if (brand) {
      const count = addCount(goods, 'brand', brand);
      if (!brands.find(n => n.brand === brand)) {
        brands.push({ id: uuidv4(), brand, count });
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
    if (flavor) {
      if (!flavors.find(n => n.flavor === flavor)) {
        flavors.push({ id: uuidv4(), flavor });
      }
    }
    if (size) {
      if (!sizes.find(n => n.size === size)) {
        sizes.push({ id: uuidv4(), size });
      }
    }
    if (type) {
      if (!types.find(n => n.type === type)) {
        types.push({ id: uuidv4(), type });
      }
    }
  });
  const colorsUniq = colorsArr.map(color => {
    return {
      id: uuidv4(),
      color,
    };
  });

  return (
    <Aside>
      {prices.length > 0 && <PriceFilter items={prices} />}
      {brands.length > 0 && <BrandFilter items={brands} />}
      {weights.length > 0 && <WeightFilter items={weights} />}
      {flavors.length > 0 && <FlavorFilter items={flavors} />}
      {sizes.length > 0 && <SizeFilter items={sizes} />}
      {types.length > 0 && <TypeFilter items={types} />}
      {colorsUniq.length > 0 && <ColorFilter items={colorsUniq} />}
      {statuses.length > 0 && <StatusFilter items={statuses} />}
    </Aside>
  );
}
