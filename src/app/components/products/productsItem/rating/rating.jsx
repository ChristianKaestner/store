import Link from 'next/link';
import { Rating } from '@mui/material';
import { Container, Text } from './rating.styled';

export default function ProductRating({ product, size }) {
  const { rating, reviews, categories, id } = product;

  return (
    <Container>
      <Rating
        name="half-rating"
        precision={0.5}
        value={rating}
        readOnly
        size={size}
      />
      <Link href={`/${categories}/${id}/reviews`}>
        <Text>{reviews.length} reviews</Text>
      </Link>
    </Container>
  );
}
