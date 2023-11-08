import { useSelector } from 'react-redux';
import {
  selectBrand,
  selectColor,
  selectHookahSize,
  selectFlavor,
  selectPrice,
  selectSize,
  selectStatus,
  selectType,
  selectBowlType,
  selectWeight,
} from '../redux/filters/selectors';

export const useFilters = () => {
  const filters = {
    brand: useSelector(selectBrand),
    color: useSelector(selectColor),
    hookah_size: useSelector(selectHookahSize),
    flavor: useSelector(selectFlavor),
    price: useSelector(selectPrice),
    size: useSelector(selectSize),
    status: useSelector(selectStatus),
    type: useSelector(selectType),
    bowl_type: useSelector(selectBowlType),
    weight: useSelector(selectWeight),
  };
  return filters;
};
