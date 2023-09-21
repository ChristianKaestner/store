import { useSelector } from 'react-redux';
import {
  selectBrand,
  selectColor,
  selectFlavor,
  selectPrice,
  selectSize,
  selectStatus,
  selectType,
  selectWeight,
} from '../redux/filters/selectors';

export const useFilters = () => {
  const filters = {
    brand: useSelector(selectBrand),
    color: useSelector(selectColor),
    flavor: useSelector(selectFlavor),
    price: useSelector(selectPrice),
    size: useSelector(selectSize),
    status: useSelector(selectStatus),
    type: useSelector(selectType),
    weight: useSelector(selectWeight),
  };
  return filters;
};
