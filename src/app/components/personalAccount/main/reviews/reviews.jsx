import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ReviewList from '@/app/components/reviews/reviewsList/reviewsList';

export default function AccountReviews({ reviews }) {
  return (
    <Box sx={{ px: 2 }}>
      <PageTitle title="Product Reviews" />
      <ReviewList reviews={reviews} />
    </Box>
  );
}
