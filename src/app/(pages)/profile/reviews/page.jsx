import AccountReviews from '@/app/components/personalAccount/main/reviews/reviews';
import { Box } from '@mui/material';
import { tmpUser } from '@/app/lib/tmpData';

export const metadata = {
  title: 'Profile - Reviews',
  description: `List of user reviews of purchased products`,
};

export default function Reviews() {
  const { reviews } = tmpUser;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountReviews reviews={reviews} />
    </Box>
  );
}
