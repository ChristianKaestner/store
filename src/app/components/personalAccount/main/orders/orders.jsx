'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '@/app/redux/order/operations';
import { useOrders } from '@/app/hooks/useOrder';
import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import OrderItem from './orderItem/orderItem';
import withAuth from '@/app/components/auth/withAuth';

function AccountOrders() {
  const { orders, isLoading } = useOrders();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <>
      <PageTitle title="Order History" />
      {!isLoading && orders?.length > 0 && (
        <Box sx={{ listStyle: 'none' }} component="ul">
          {orders.map(order => {
            return <OrderItem order={order} key={order.id} />;
          })}
        </Box>
      )}
    </>
  );
}

AccountOrders.displayName = 'AccountOrders';
export const AccountOrdersWithAuth = withAuth(AccountOrders);
