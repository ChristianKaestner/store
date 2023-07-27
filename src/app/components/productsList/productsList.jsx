import { Box, Grid } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';

export default function ProductsList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{
          ml: 0,
          mt: 2,
          width: 'calc(100% - 1px)',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <ProductsItem />
        </Grid>
      </Grid>
    </Box>
  );
}
