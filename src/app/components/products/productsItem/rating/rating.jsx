import Link from 'next/link';
import { Rating } from '@mui/material';
import { Container, Text } from './rating.styled';
export default function ProductRating({
  rating,
  reviewUrl,
  totalReviews,
  size,
}) {
  return (
    <Container>
      <Rating
        name="half-rating"
        precision={0.5}
        value={rating}
        readOnly
        size={size}
      />
      <Link href={reviewUrl}>
        <Text>{totalReviews} reviews</Text>
      </Link>
    </Container>
  );
}
