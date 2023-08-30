'use client';
import { v4 as uuidv4 } from 'uuid';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';
import ColorFilter from '../filters/color/color';
import StatusFilter from '../filters/status/status';

//need to add Skeleton
export default function Sidebar({
  goods,
  price,
  brands,
  weight,
  color,
  status,
}) {
  const colorsArr = [];
  const brandsArr = [];
  goods.forEach(product => {
    if (!colorsArr.find(n => n.color === product.color)) {
      colorsArr.push({ id: uuidv4(), color: product.color });
    }
    if (!brandsArr.find(n => n.brand === product.brand)) {
      brandsArr.push({ id: uuidv4(), brand: product.brand });
    }
  });
  // console.log(colorsArr);
  // console.log(brandsArr);

  return (
    <Aside>
      {price && <PriceFilter from={3} to={3400} />}
      {brands && <BrandFilter items={brandsArr} />}
      {weight && <WeightFilter />}
      {color && <ColorFilter items={colorsArr} />}
      {status && <StatusFilter />}
    </Aside>
  );
}
