import { ButtonStyled } from './buyButton.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function BuyButton({ width = 160, isover, handleCart }) {
  return (
    <ButtonStyled
      width={width}
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      onClick={handleCart}
      disabled={isover}
    >
      Buy
    </ButtonStyled>
  );
}
