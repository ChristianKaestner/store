import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { useCart } from '@/app/hooks/useCart';
import { toggleCart } from '@/app/redux/modal/slice';
import { addCart } from '@/app/redux/cart/operations';
import { cartAdd } from '@/app/redux/cart/slice';
import { useFavorite } from '@/app/hooks/useFavorite';
import { Box, Typography, Paper } from '@mui/material';
import ProductRating from '../../productsItem/rating/rating';
import FavoriteIcon from '../../productsItem/favoriteIcon/favoriteIcon';
import BuyButton from '../../productsItem/buyButton/buyButton';
import Price from '../../productsItem/price/price';
import BalanceStatus from '../../productsItem/balanceStatus/balanceStatus';
import ProductCode from '../../productsItem/productCode/productCode';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import { Block, BlockBtn, PaperStyled } from './productContent.styled';
import { Span } from '@/app/lib/commonStyles';

export default function ProductContent({ product }) {
  const { brand, title, description, colors, price } = product;
  const { status, id } = product;
  const { favoriteIds = [] } = useFavorite();
  const isover = status === 'Out of stock' ? true : false;
  const isFavorite = favoriteIds.includes(id);

  const { cartProducts } = useCart();
  const { isLogin } = useAuth();

  const dispatch = useDispatch();

  const handleCart = () => {
    if (isLogin) {
      const product = cartProducts.filter(product => product.id === id);
      if (!product.length) {
        const payload = { items: [{ productId: id, quantity: 1 }] };
        dispatch(addCart(payload));
      }
    } else {
      dispatch(cartAdd(id));
    }
    dispatch(toggleCart(true));
  };
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{ p: 2, bgcolor: 'primary.main', zIndex: 1, opacity: 0.9 }}
      >
        <PageTitle title={title} />

        <Block>
          <ProductRating product={product} size="medium" />
          <ProductCode id={id} />
        </Block>

        <Box sx={{ mt: 2 }}>
          <Typography
            component="h2"
            sx={{ color: 'primary.dim', fontWeight: 400 }}
          >
            <Span component="span">Brand: </Span>
            {brand.brand}
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h3"
            sx={{ color: 'primary.dim', whiteSpace: 'pre-line' }}
          >
            <Span component="span">Description:</Span> {description}
          </Typography>
        </Box>
      </Paper>

      <PaperStyled elevation={2} isover={isover}>
        <Box>
          <Price price={price} component="h4" />
          <BalanceStatus status={status} />
        </Box>
        <BlockBtn>
          <BuyButton id={id} isover={isover} handleCart={handleCart} />
          <FavoriteIcon isFavorite={isFavorite} id={id} />
        </BlockBtn>
      </PaperStyled>
    </Box>
  );
}
