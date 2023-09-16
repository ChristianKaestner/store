'use client';

import ProductsItem from '../productsItem/productsItem';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Pagination, Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import Skeleton from '../../skeleton/skeleton';

export default function ProductsList({
  goods,
  isLoading,
  cart,
  favorites,
  pagination,
  page,
  onPage,
  onLoadMore,
  skeleton,
  lgPerPage = 2.4,
}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        component="ul"
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{ listStyle: 'none' }}
      >
        {isLoading ? (
          <Skeleton length={skeleton} />
        ) : (
          <>
            {goods &&
              goods.map(item => {
                return (
                  <Grid
                    xs={6}
                    sm={6}
                    md={4}
                    lg={lgPerPage}
                    key={item.id}
                    component="li"
                  >
                    <ProductsItem
                      product={item}
                      cart={cart}
                      favorites={favorites}
                    />
                  </Grid>
                );
              })}
          </>
        )}
      </Grid>
      {goods.length > 20 && pagination && (
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
