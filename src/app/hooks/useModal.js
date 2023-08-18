import { useSelector } from 'react-redux';
import {
  selectCartModal,
  selectAccountModal,
  selectMobileModal,
  selectProductsModal,
} from '../redux/modal/selectors';

export const useModal = () => {
  const cartModal = useSelector(selectCartModal);
  const accountModal = useSelector(selectAccountModal);
  const mobileModal = useSelector(selectMobileModal);
  const productsModal = useSelector(selectProductsModal);

  return {
    cartModal,
    accountModal,
    mobileModal,
    productsModal,
  };
};
