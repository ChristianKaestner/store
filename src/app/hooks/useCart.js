import { useSelector } from 'react-redux';
import {
  selectCart,
  selectIsError,
  selectIsLoading,
  selectProducts,
} from '../redux/cart/selectors';

export const useCart = () => {
  const cart = useSelector(selectCart);
  const cartProducts = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    cart,
    cartProducts,
    isLoading,
    isError,
  };
};
