import { Column } from '@/app/utils/commonStyles';
import AccountSettings from './settings/settings';
import AccountPurchases from './purchases/purchases';
import AccountFavorites from './favorites/favorites';
import AccountReviews from './reviews/reviews';

export default function AccountMain({ value, user }) {
  const { orders, favorites, reviews } = user;
  return (
    <Column
      component="section"
      sx={{
        width: '70%',
      }}
    >
      {value === 0 && <AccountSettings user={user} />}
      {value === 1 && <AccountPurchases orders={orders} />}
      {value === 2 && <AccountFavorites favorites={favorites} />}
      {value === 3 && <AccountReviews reviews={reviews} />}
    </Column>
  );
}
