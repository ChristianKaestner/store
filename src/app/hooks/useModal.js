import { useSelector } from 'react-redux';
import {
  selectCartModal,
  selectAccountModal,
  selectMobileModal,
  selectProductsModal,
  selectSuccessModal,
} from '../redux/modal/selectors';

export const useModal = () => {
  const cartModal = useSelector(selectCartModal);
  const accountModal = useSelector(selectAccountModal);
  const mobileModal = useSelector(selectMobileModal);
  const productsModal = useSelector(selectProductsModal);
  const successModal = useSelector(selectSuccessModal);
  return {
    cartModal,
    accountModal,
    mobileModal,
    productsModal,
    successModal,
  };
};
