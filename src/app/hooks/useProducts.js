import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectPromotedProducts,
  selectCart,
  selectFavorite,
  selectIsError,
  selectIsLoading,
} from '../redux/products/selectors';

export const useProducts = () => {
  const promotedProducts = useSelector(selectPromotedProducts);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const favorite = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    promotedProducts,
    products,
    cart,
    favorite,
    isLoading,
    isError,
  };
};
