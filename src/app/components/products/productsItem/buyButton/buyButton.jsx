import { useDispatch } from 'react-redux';
import { toggleCart } from '@/app/redux/modal/slice';
import { cartAdd } from '@/app/redux/cart/slice';
import { ButtonStyled } from './buyButton.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function BuyButton({ id, width = 160, isover }) {
  const dispatch = useDispatch();
  const handleCart = () => {
    //need to transmit current color to cart
    dispatch(cartAdd(id));
    dispatch(toggleCart(true));
  };

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
