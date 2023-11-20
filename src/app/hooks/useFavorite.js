import { useSelector } from 'react-redux';
import {
  selectFavoriteIds,
  selectError,
  selectIsLoading,
  selectProducts,
} from '../redux/favorite/selectors';

export const useCart = () => {
  const favoriteIds = useSelector(selectFavoriteIds);
  const favoriteProducts = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    favoriteIds,
    favoriteProducts,
    isLoading,
    error,
  };
};
