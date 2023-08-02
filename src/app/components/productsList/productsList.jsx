'use client';
import { Box } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';
import { items } from '@/app/utils/tmpData';

export default function ProductsList() {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        {items.map(item => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ProductsItem
                id={item.id}
                promotion={item.promotion}
                price={item.price}
                subTitle={item.subTitle}
                title={item.title}
                images={item.images}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
