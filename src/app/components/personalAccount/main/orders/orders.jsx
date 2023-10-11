'use client';
import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import OrderItem from './orderItem/orderItem';
import withAuth from '@/app/components/auth/withAuth';
import { tmpUser } from '@/app/lib/tmpData';

function AccountOrders() {
  const { orders } = tmpUser;
  return (
    <>
      <PageTitle title="Order History" />
      {orders?.length > 0 && (
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
