import ProductsItem from '../productsItem/productItem';
import { useCart } from '@/app/hooks/useCart';
import { Box, Typography } from '@mui/material';
import Skeleton from '../../skeleton/skeleton';
import { BlockProducts } from './productList.styled';
import { visuallyHidden } from '@mui/utils';
import { defineCategory } from '@/app/lib/functions';

export default function ProductsList({
  skeleton,
  width,
  component = 'h2',
  title,
  products,
  favorites,
  isLoading,
}) {
  const { cart } = useCart();

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
            {products &&
              products.map(product => {
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
    </Box>
  );
}
