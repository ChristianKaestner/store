import { useSelector } from 'react-redux';
import {
  selectGoods,
  selectPromotedGoods,
  selectCart,
  selectFavorite,
  selectIsError,
  selectIsLoading,
} from '../redux/goods/selectors';

export const useGoods = () => {
  const promotedGoods = useSelector(selectPromotedGoods);
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const favorite = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    promotedGoods,
    goods,
    cart,
    favorite,
    isLoading,
    isError,
  };
};
