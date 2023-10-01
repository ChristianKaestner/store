'use client';
import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import OrderItem from './orderItem/orderItem';

export default function AccountOrders({ orders }) {
  return (
    <>
      <PageTitle title="Order History" />
      {orders.length > 0 && (
        <Box sx={{ listStyle: 'none' }} component="ul">
          {orders.map(order => {
            return <OrderItem order={order} key={order.id} />;
          })}
        </Box>
      )}
    </>
  );
}
