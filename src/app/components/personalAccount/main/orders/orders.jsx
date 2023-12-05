'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '@/app/redux/order/operations';
import { useOrders } from '@/app/hooks/useOrder';
import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import OrderItem from './orderItem/orderItem';
import Loader from '@/app/components/loading/loaderBackdrop';
import withAuth from '@/app/components/auth/withAuth';

function AccountOrders() {
  const [reqLoading, setReqLoading] = useState(false);
  const { orders, isLoading } = useOrders();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleReqLoading = value => {
    setReqLoading(value);
  };

  return (
    <>
      <PageTitle title="Order History" />
      {!isLoading && orders?.length > 0 && (
        <Box sx={{ listStyle: 'none' }} component="ul">
          {orders.map(order => {
            return (
              <OrderItem
                order={order}
                key={order.id}
                handleReqLoading={handleReqLoading}
              />
            );
          })}
        </Box>
      )}
      <Loader isLoading={isLoading || reqLoading} />
    </>
  );
}

AccountOrders.displayName = 'AccountOrders';
export const AccountOrdersWithAuth = withAuth(AccountOrders);
