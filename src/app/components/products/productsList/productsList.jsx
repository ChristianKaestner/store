'use client';

import ProductsItem from '../productsItem/productItem';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Pagination, Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import Skeleton from '../../skeleton/skeleton';
import { BlockBtn, PaginationStyled } from './productList.styled';

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
    <Box component="section" sx={{ width: '100%' }}>
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
          <BlockBtn>
            <Button
              startIcon={<LoopIcon />}
              sx={{ color: 'primary.light' }}
              size="large"
              onClick={onLoadMore}
            >
              Load more
            </Button>
          </BlockBtn>
          <PaginationStyled
            count={pagination}
            page={page}
            size="large"
            onChange={(e, value) => onPage(value)}
          />
        </>
      )}
    </Box>
  );
}
