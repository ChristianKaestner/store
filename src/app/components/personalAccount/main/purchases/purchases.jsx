import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import PurchaseItem from './purchaseItem/purchaseItem';

export default function AccountPurchases({ orders }) {
  return (
    <Box sx={{ px: 2 }}>
      <PageTitle title="Purchase History" />
      {orders.length > 0 && (
        <Box sx={{ listStyle: 'none' }} component="ul">
          {orders.map(order => {
            return <PurchaseItem order={order} key={order.id} />;
          })}
        </Box>
      )}
    </Box>
  );
}
