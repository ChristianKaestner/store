'use client';
import { Box, Paper } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';

export default function ProductsList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid
    //     container
    //     spacing={1}
    //     sx={{
    //       ml: 0,
    //       mt: 2,
    //       width: 'calc(100% - 1px)',
    //       justifyContent: 'space-between',
    //       gap: '16px',
    //     }}
    //   >
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={1} />
    //     </Grid>
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={2} />
    //     </Grid>
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={3} />
    //     </Grid>
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={4} />
    //     </Grid>
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={5} />
    //     </Grid>
    //     <Grid item style={{ padding: 0 }}>
    //       <ProductsItem id={6} />
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
