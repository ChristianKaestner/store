'use client';

import { v4 as uuidv4 } from 'uuid';
import { Aside } from './sidebar.styled';
import PriceFilter from '../filters/price/price';
import BrandFilter from '../filters/brand/brand';
import WeightFilter from '../filters/weight/weight';
import ColorFilter from '../filters/color/color';
import HookahSizeFilter from '../filters/hookahSize/hookahSize';
import StatusFilter from '../filters/status/status';
import FlavorFilter from '../filters/flavor/flavor';
import SizeFilter from '../filters/size/size';
import TypeFilter from '../filters/type/type';
import { addCount } from '@/app/lib/functions';
import { Box } from '@mui/material';

export default function Sidebar({ filter, mobile = false }) {
  console.log(filter);
  const { prices, brandCounts, colorCounts, hookahSizeCounts } = filter;
  const { statusCounts, flavorCounts, weightCounts } = filter;
  return (
    <>
      {mobile ? (
        <Box>
          {/* {prices.length > 0 && <PriceFilter items={prices} />}
          {brands.length > 0 && <BrandFilter items={brands} />}
          {weights.length > 0 && <WeightFilter items={weights} />}
          {flavors.length > 0 && <FlavorFilter items={flavors} />}
          {sizes.length > 0 && <SizeFilter items={sizes} />}
          {types.length > 0 && <TypeFilter items={types} />}
          {colorsUniq.length > 0 && <ColorFilter items={colorsUniq} />}
          {statuses.length > 0 && <StatusFilter items={statuses} />} */}
        </Box>
      ) : (
        <Aside>
          {prices && <PriceFilter items={prices} />}
          {brandCounts && <BrandFilter items={brandCounts} />}
          {colorCounts && <ColorFilter items={colorCounts} />}
          {hookahSizeCounts && <HookahSizeFilter items={hookahSizeCounts} />}
          {flavorCounts && <FlavorFilter items={flavorCounts} />}

          {weightCounts && <WeightFilter items={weightCounts} />}
          {statusCounts && <StatusFilter items={statusCounts} />}
          {/*{weights.length > 0 && <WeightFilter items={weights} />}
          weightCounts
          {sizes.length > 0 && <SizeFilter items={sizes} />}
          {types.length > 0 && <TypeFilter items={types} />}
         
          {statuses.length > 0 && <StatusFilter items={statuses} />} */}
        </Aside>
      )}
    </>
  );
}
