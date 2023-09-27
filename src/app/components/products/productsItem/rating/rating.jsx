import Link from 'next/link';
import { Container, Text, RatingStyled } from './rating.styled';

export default function ProductRating({ product, size }) {
  const { rating, reviews, categories, id } = product;

  return (
    <Container>
      <RatingStyled
        name="half-rating"
        precision={0.5}
        value={rating}
        readOnly
        size={size}
      />
      <Link href={`/${categories}/${id}/reviews`}>
        <Text>{reviews.length} review</Text>
      </Link>
    </Container>
  );
}
