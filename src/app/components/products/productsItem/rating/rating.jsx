import Link from 'next/link';
import { Box, Typography, Rating } from '@mui/material';

export default function ProductRating({
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
      <Rating
        name="half-rating"
        precision={0.2}
        value={rating}
        readOnly
        size={size}
      />
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
