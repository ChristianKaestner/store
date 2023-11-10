'use client';

// import { v4 as uuidv4 } from 'uuid';
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
import BowlTypeFilter from '../filters/bowlType/bowlType';
import { Box } from '@mui/material';

export default function Sidebar({ filter, mobile = false }) {
  console.log(filter);
  const { prices, brandCounts, colorCounts, hookahSizeCounts } = filter;
  const { statusCounts, flavorCounts, weightCounts, sizeCounts } = filter;
  const { typeCounts, bowlTypeCounts } = filter;

  return (
    <>
      {mobile ? (
        <Box>
          {prices && <PriceFilter items={prices} />}
          {brandCounts && <BrandFilter items={brandCounts} />}
          {colorCounts && <ColorFilter items={colorCounts} />}
          {hookahSizeCounts && <HookahSizeFilter items={hookahSizeCounts} />}
          {flavorCounts && <FlavorFilter items={flavorCounts} />}
          {sizeCounts && <SizeFilter items={sizeCounts} />}
          {weightCounts && <WeightFilter items={weightCounts} />}
          {typeCounts && <TypeFilter items={typeCounts} />}
          {bowlTypeCounts && <BowlTypeFilter items={bowlTypeCounts} />}
          {statusCounts && <StatusFilter items={statusCounts} />}
        </Box>
      ) : (
        <Aside>
          {prices && <PriceFilter items={prices} />}
          {brandCounts && <BrandFilter items={brandCounts} />}
          {colorCounts && <ColorFilter items={colorCounts} />}
          {hookahSizeCounts && <HookahSizeFilter items={hookahSizeCounts} />}
          {flavorCounts && <FlavorFilter items={flavorCounts} />}
          {sizeCounts && <SizeFilter items={sizeCounts} />}
          {weightCounts && <WeightFilter items={weightCounts} />}
          {typeCounts && <TypeFilter items={typeCounts} />}
          {bowlTypeCounts && <BowlTypeFilter items={bowlTypeCounts} />}
          {statusCounts && <StatusFilter items={statusCounts} />}
        </Aside>
      )}
    </>
  );
}
