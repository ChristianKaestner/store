import { useSelector } from 'react-redux';
import {
  selectFavoriteIds,
  selectError,
  selectIsLoading,
} from '../redux/favorite/selectors';

export const useFavorite = () => {
  const favoriteIds = useSelector(selectFavoriteIds);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    favoriteIds,
    isLoading,
    error,
  };
};
