'use client';

import { useProducts } from '@/app/hooks/useProducts';
import { Box } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';

export default function ProductsList() {
  const { promotedProducts, isLoading, cart } = useProducts();

  // need to add sekeleton when isLodaing

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid
        component="ul"
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{ listStyle: 'none' }}
      >
        {promotedProducts.map(item => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.id} component="li">
              <ProductsItem product={item} cart={cart} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
