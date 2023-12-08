'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress, updateUser } from '../../redux/auth/operations';
import { toggleOrder, togglePayment } from '../../redux/modal/slice';
import { useOrders } from '../../hooks/useOrder';
import { useAuth } from '../../hooks/useAuth';
import OrderAddress from './orderAddress/orderAddress';
import OrderUser from './orderUser/orderUser';
import PayBtn from './orderPaymentBtn/orderPaymentBtn';
import OnError from '../Notifications/onError';
import { Box } from '@mui/material';
import { Container } from './order.styled';

export default function Order() {
  const [expandedAddress, setExpandedAddress] = useState(false);
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const { orders, isLoading } = useOrders();
  const { user } = useAuth();
  const order = orders[0];

  const dispatch = useDispatch();

  const handlePayment = () => {
    const { address } = user;
    const addressError = !address.city || !address.street || !address.house;
    const detailsError = !user.firstName || !user.lastName || !user.phone;

    addressError ? setAddressError(true) : setAddressError(false);
    detailsError ? setDetailsError(true) : setDetailsError(false);

    if (!addressError && !detailsError) {
      dispatch(toggleOrder(false));
      dispatch(togglePayment(true));
    }
  };

  const handleEditAddress = async data => {
    const response = await dispatch(updateAddress(data));
    if (response.meta.requestStatus === 'fulfilled') {
      setExpandedAddress(false);
      setAddressError(false);
    }
  };

  const handleEditDetails = async data => {
    const response = await dispatch(updateUser(data));
    if (response.meta.requestStatus === 'fulfilled') {
      setExpandedDetails(false);
      setDetailsError(false);
    }
  };

  return (
    <Container>
      {!isLoading && (
        <>
          <Box>
            <OrderAddress
              user={user}
              expandedAddress={expandedAddress}
              setExpandedAddress={setExpandedAddress}
              handleEditAddress={handleEditAddress}
            />
            {addressError && !expandedAddress && (
              <OnError text={'Please fill in the Address field'} />
            )}
            <OrderUser
              user={user}
              expandedDetails={expandedDetails}
              setExpandedDetails={setExpandedDetails}
              handleEditDetails={handleEditDetails}
            />
            {detailsError && !expandedDetails && (
              <OnError text={'Please fill in the Details field'} />
            )}
          </Box>
          {!expandedAddress && !expandedDetails && (
            <PayBtn total={order?.total} handlePayment={handlePayment} />
          )}
        </>
      )}
    </Container>
  );
}
