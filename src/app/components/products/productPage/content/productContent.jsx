import { Box, Typography, Paper } from '@mui/material';
import ProductRating from '../../productsItem/rating/rating';
import FavoriteIcon from '../../productsItem/favoriteIcon/favoriteIcon';
import ColorPicker from '../colorPicker/colorPicker';
import BuyButton from '../../productsItem/buyButton/buyButton';
import Price from '../../productsItem/price/price';
import BalanceStatus from '../../productsItem/balanceStatus/balanceStatus';
import ProductCode from '../../productsItem/productCode/productCode';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import { Block, BlockBtn, PaperStyled } from './productContent.styled';
import { RowCenter, Span } from '@/app/utils/commonStyles';

export default function ProductContent({ product, favorites }) {
  const { brand, title, description, colors, price } = product;
  const { status, id, rating, reviews } = product;

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2 }}>
        <PageTitle title={title} />

        <Block>
          <ProductRating
            rating={rating}
            reviewUrl="/reviews"
            totalReviews={reviews.length}
            size="medium"
          />
          <ProductCode id={id} />
        </Block>

        <Box sx={{ mt: 2 }}>
          <Typography component="h2">
            <Span component="span">Brand: </Span>
            {brand}
          </Typography>
        </Box>
        <RowCenter sx={{ my: 2 }}>
          {colors && <ColorPicker colors={colors} />}
        </RowCenter>
        <Box>
          <Typography component="h3">
            <Span component="span">Description:</Span> {description}
          </Typography>
        </Box>
      </Paper>

      <PaperStyled elevation={2}>
        <Box>
          <Price price={price} component="h4" />
          <BalanceStatus status={status} />
        </Box>
        <BlockBtn>
          <BuyButton id={id} width={160} />
          <FavoriteIcon favorites={favorites} id={id} />
        </BlockBtn>
      </PaperStyled>
    </Box>
  );
}
