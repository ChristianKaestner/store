import { useDispatch } from 'react-redux';
import { toggleCart } from '@/app/redux/modal/slice';
import { cartAdd } from '@/app/redux/cart/slice';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function BuyButton({ id, width = 160 }) {
  const dispatch = useDispatch();
  const handleCart = () => {
    //need to transmit current color to cart
    dispatch(cartAdd(id));
    dispatch(toggleCart(true));
  };

  return (
    <Button
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      sx={{ width: width, height: 40, bgcolor: 'primary.light', mx: 2 }}
      onClick={handleCart}
    >
      Buy
    </Button>
  );
}
