'use client';

import { useState } from 'react';
import {
  useGetAllGoodsQuery,
  useGetPromotionQuery,
} from '@/app/redux/services/goods';
import ProductsItem from '../productsItem/productItem';
import { useCart } from '@/app/hooks/useCart';
import { Box, Button, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import Skeleton from '../../skeleton/skeleton';
import {
  BlockBtn,
  PaginationStyled,
  BlockProducts,
} from './productList.styled';
import { visuallyHidden } from '@mui/utils';
import { tmpUser } from '@/app/lib/tmpData';
import { getGoods, defineCategory } from '@/app/lib/functions';

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
  // const { data = [], isLoading, error } = useGetAllGoodsQuery();
  const { data = [], isLoading, error } = useGetPromotionQuery();
  const { cart } = useCart();
  // const goods = getGoods(data, promoted, category);
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

      <BlockProducts component="ul">
        {isLoading ? (
          <Skeleton length={skeleton} />
        ) : (
          <>
            {data &&
              data.map(product => {
                const category = defineCategory(product);
                const productWithCats = { ...product, category };
                return (
                  <ProductsItem
                    key={product.id}
                    product={productWithCats}
                    cart={cart}
                    favorites={favorites}
                    width={width}
                  />
                );
              })}
          </>
        )}
      </BlockProducts>

      {data.length > 20 && pagination && (
        <>
          <BlockBtn>
            <Button
              startIcon={<LoopIcon />}
              sx={{ color: 'primary.dim' }}
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
            shape="rounded"
            onChange={(e, value) => handlePage(value)}
          />
        </>
      )}
    </Box>
  );
}
