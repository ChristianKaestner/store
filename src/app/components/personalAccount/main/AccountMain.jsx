import { Column } from '@/app/utils/commonStyles';
import AccountSettings from './settings/settings';
import AccountPurchases from './purchases/purchses';
import AccountFavorites from './favorites/favorites';
import AccountReviews from './reviews/reviews';

export default function AccountMain({ value }) {
  const tmpUser = {
    firstName: 'Vladyslav',
    lastName: 'Rohalov',
    phone: '+380952268222',
    email: 'v.rohalov@gmail.com',
    address: {
      city: 'Dnipro',
      street: 'Nezalezhnosti',
      house: '25',
      apartment: '17',
    },
  };
  return (
    <Column
      component="section"
      sx={{
        width: '80%',
        // bgcolor: 'red',
      }}
    >
      {value === 0 && <AccountSettings user={tmpUser} />}
      {value === 1 && <AccountPurchases />}
      {value === 2 && <AccountFavorites />}
      {value === 3 && <AccountReviews />}
    </Column>
  );
}
