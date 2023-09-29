import AccountFavorites from '@/app/components/personalAccount/main/favorites/favorites';
import { Box } from '@mui/material';
import { tmpUser } from '@/app/lib/tmpData';

export const metadata = {
  title: 'Profile - Favorite',
  description: `List of user's favorite products`,
};

export default function Favorites() {
  const { favorites } = tmpUser;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountFavorites favorites={favorites} />
    </Box>
  );
}
