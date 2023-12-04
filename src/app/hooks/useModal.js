import { useSelector } from 'react-redux';
import {
  selectCartModal,
  selectOrderModal,
  selectAccountModal,
  selectMobileModal,
  selectProductsModal,
  selectSuccessModal,
  selectPaymentModal,
} from '../redux/modal/selectors';

export const useModal = () => {
  const cartModal = useSelector(selectCartModal);
  const orderModal = useSelector(selectOrderModal);
  const accountModal = useSelector(selectAccountModal);
  const mobileModal = useSelector(selectMobileModal);
  const productsModal = useSelector(selectProductsModal);
  const successModal = useSelector(selectSuccessModal);
  const paymentModal = useSelector(selectPaymentModal);

  return {
    cartModal,
    orderModal,
    accountModal,
    mobileModal,
    productsModal,
    successModal,
    paymentModal,
  };
};
