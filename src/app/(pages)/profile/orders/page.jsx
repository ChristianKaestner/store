import AccountOrders from '@/app/components/personalAccount/main/orders/orders';
import { Box } from '@mui/material';
import { tmpUser } from '@/app/lib/tmpData';

export const metadata = {
  title: 'Profile - Orders history',
  description: 'User order history, active orders, orders awaiting delivery',
};

export default function Purchases() {
  const { orders } = tmpUser;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountOrders orders={orders} />
    </Box>
  );
}
