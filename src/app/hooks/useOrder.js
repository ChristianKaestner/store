import { useSelector } from 'react-redux';
import {
  selectOrders,
  selectError,
  selectIsLoading,
} from '../redux/order/selectors';

export const useOrders = () => {
  const orders = useSelector(selectOrders);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    orders,
    isLoading,
    error,
  };
};
