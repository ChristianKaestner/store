import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectIsError,
  selectIsLoading,
} from '../redux/products/selectors';

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    products,
    isLoading,
    isError,
  };
};
