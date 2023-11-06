import Link from 'next/link';
import { Container, Text, RatingStyled } from './rating.styled';

export default function ProductRating({ product, size }) {
  const { rating, reviews, category, id } = product;

  return (
    <Container>
      <RatingStyled
        name="half-rating"
        precision={0.5}
        value={rating || 0}
        readOnly
        size={size}
      />
      <Link href={`/${category}/${id}/reviews`}>
        <Text>{reviews?.length || 0} review</Text>
      </Link>
    </Container>
  );
}
