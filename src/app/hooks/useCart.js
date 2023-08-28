import { useSelector } from 'react-redux';
import {
  selectCart,
  selectIsError,
  selectIsLoading,
} from '../redux/cart/selectors';

export const useCart = () => {
  const cart = useSelector(selectCart);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    cart,
    isLoading,
    isError,
  };
};
