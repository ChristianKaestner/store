'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress, updateUser } from '../../redux/auth/operations';
import { useOrders } from '../../hooks/useOrder';
import { useAuth } from '../../hooks/useAuth';
import OrderAddress from './orderAddress/orderAddress';
import OrderUser from './orderUser/orderUser';
import PayBtn from './orderPaymentBtn/orderPaymentBtn';
import { Box } from '@mui/material';
import { Container } from './order.styled';

export default function Order() {
  const [expandedAddress, setExpandedAddress] = useState(false);
  const [expandedDetails, setExpandedDetails] = useState(false);
  const { orders, isLoading } = useOrders();
  const { user } = useAuth();
  const order = orders[0];

  const dispatch = useDispatch();

  const handlePayment = () => {
    console.log('There is no payment yet');
  };

  const handleEditAddress = async data => {
    const response = await dispatch(updateAddress(data));
    if (response.meta.requestStatus === 'fulfilled') {
      setExpandedAddress(false);
    }
  };

  const handleEditDetails = async data => {
    const response = await dispatch(updateUser(data));
    if (response.meta.requestStatus === 'fulfilled') {
      setExpandedDetails(false);
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
            <OrderUser
              user={user}
              expandedDetails={expandedDetails}
              setExpandedDetails={setExpandedDetails}
              handleEditDetails={handleEditDetails}
            />
          </Box>
          {!expandedAddress && !expandedDetails && (
            <PayBtn total={order?.total} handlePayment={handlePayment} />
          )}
        </>
      )}
    </Container>
  );
}
