'use client';
import { Box, Paper } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';

export default function ProductsList() {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={6} md={4}>
          <ProductsItem id={1} />
        </Grid>
        <Grid xs={6} md={4}>
          <ProductsItem id={2} />
        </Grid>
        <Grid xs={6} md={4}>
          <ProductsItem id={3} />
        </Grid>
        <Grid xs={6} md={4}>
          <ProductsItem id={4} />
        </Grid>
      </Grid>
    </Box>
  );
}
