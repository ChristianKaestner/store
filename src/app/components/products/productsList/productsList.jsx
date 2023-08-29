'use client';

import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Pagination, Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

export default function ProductsList({
  goods,
  isLoading,
  cart,
  favorite,
  pagination,
  page,
  onPage,
  onLoadMore,
}) {
  // need to add sekeleton when isLodaing

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        component="ul"
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{ listStyle: 'none' }}
      >
        {goods &&
          goods.map(item => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} key={item.id} component="li">
                <ProductsItem product={item} cart={cart} favorite={favorite} />
              </Grid>
            );
          })}
      </Grid>
      {goods && pagination && (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mt: 4,
              alignItems: 'center',
            }}
          >
            <Button
              startIcon={<LoopIcon />}
              sx={{ color: 'primary.light' }}
              size="large"
              onClick={onLoadMore}
            >
              Load more
            </Button>
          </Box>
          <Pagination
            count={pagination}
            page={page}
            size="large"
            sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
            onChange={(e, value) => onPage(value)}
          />
        </>
      )}
    </Box>
  );
}
