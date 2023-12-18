'use client';

import ProductsItem from '../productsItem/productItem';
import { Box, Typography } from '@mui/material';
import Skeleton from '../../skeleton/skeleton';
import Grid from '@mui/material/Unstable_Grid2';
import { visuallyHidden } from '@mui/utils';
import { defineCategory } from '@/app/lib/functions';
import Loader from '@/app/components/loading/loaderBackdrop';

export default function ProductsList({
  skeleton,
  component = 'h2',
  title,
  products,
  isLoading,
  isFP = false,
}) {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography component={component} sx={visuallyHidden}>
        {title}
      </Typography>

      <Grid container spacing={4} sx={{ listStyle: 'none' }} component="ul">
        {isLoading ? (
          <Skeleton length={skeleton} />
        ) : (
          <>
            {products &&
              products.map(product => {
                const category = defineCategory(product);
                const productWithCats = { ...product, category };
                return (
                  <Grid
                    xs={12}
                    s={6}
                    sm={4}
                    md={isFP ? 4 : 3}
                    lg={isFP ? 3 : 2.4}
                    xl={isFP ? 3 : 2}
                    component="li"
                    sx={{ listStyle: 'none' }}
                    key={product.id}
                  >
                    <ProductsItem
                      product={productWithCats}
                      component="div"
                      mb={0}
                    />
                  </Grid>
                );
              })}
          </>
        )}
      </Grid>
      <Loader isLoading={isLoading} />
    </Box>
  );
}
