import Link from 'next/link';
import { Box, Typography, Rating } from '@mui/material';

export default function PtoductRating({
  rating,
  reviewUrl,
  totalReviews,
  size,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Rating name="read-only" value={rating} readOnly size={size} />
      <Link href={reviewUrl}>
        <Typography
          sx={{
            color: 'primary.light',
            ml: 1,
            '&:hover': {
              color: 'primary.accent',
              textDecoration: 'underline',
            },
          }}
        >
          {totalReviews} reviews
        </Typography>
      </Link>
    </Box>
  );
}
