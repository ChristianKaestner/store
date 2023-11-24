import { useSelector } from 'react-redux';
import {
  selectReviews,
  selectProduct,
  selectError,
  selectIsLoading,
} from '../redux/reviews/selectors.js';

export const useReviews = () => {
  const reviews = useSelector(selectReviews);
  const product = useSelector(selectProduct);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    reviews,
    product,
    isLoading,
    error,
  };
};
