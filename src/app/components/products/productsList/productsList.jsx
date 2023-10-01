'use client';

import { useState } from 'react';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import ProductsItem from '../productsItem/productItem';
import { useCart } from '@/app/hooks/useCart';
import { Box, Pagination, Button, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import Skeleton from '../../skeleton/skeleton';
import { BlockBtn, PaginationStyled } from './productList.styled';
import { visuallyHidden } from '@mui/utils';
import { tmpUser } from '@/app/lib/tmpData';
import { getGoods } from '@/app/lib/functions';

export default function ProductsList({
  promoted,
  pagination,
  category,
  skeleton,
  width,
  component = 'h2',
  title,
}) {
  const [page, setPage] = useState(1);
  const [limit] = useState(20); //fetch by this limit
  const { data = [], isLoading, error } = useGetAllGoodsQuery();
  const { cart } = useCart();
  const goods = getGoods(data, promoted, category);
  const { favorites } = tmpUser;

  const handlePage = value => {
    setPage(value);
  };

  const handleLoadMore = () => {
    //load more
  };

  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography component={component} sx={visuallyHidden}>
        {title}
      </Typography>

      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
        }}
      >
        {isLoading ? (
          <Skeleton length={skeleton} />
        ) : (
          <>
            {goods &&
              goods.map(item => {
                return (
                  <ProductsItem
                    key={item.id}
                    product={item}
                    cart={cart}
                    favorites={favorites}
                    width={width}
                  />
                );
              })}
          </>
        )}
      </Box>

      {goods.length > 20 && pagination && (
        <>
          <BlockBtn>
            <Button
              startIcon={<LoopIcon />}
              sx={{ color: 'primary.light' }}
              size="large"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </BlockBtn>
          <PaginationStyled
            count={pagination}
            page={page}
            size="large"
            onChange={(e, value) => handlePage(value)}
          />
        </>
      )}
    </Box>
  );
}
