import { AccountFavoritesWithAuth } from '../../../components/personalAccount/main/favorites/favorites';
import { Box } from '@mui/material';

export const metadata = {
  title: 'Smokey - Favorite Products',
  description: `List of user's favorite products`,
};

export default function Favorites() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountFavoritesWithAuth />
    </Box>
  );
}
