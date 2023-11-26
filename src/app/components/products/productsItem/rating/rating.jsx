import Link from 'next/link';
import { Container, Text, RatingStyled } from './rating.styled';

export default function ProductRating({ product, isCard = true }) {
  const { rating, category, id, numberOfReviews } = product;

  return (
    <Container>
      <RatingStyled
        name="half-rating"
        precision={0.1}
        value={+rating || 0}
        isCard={isCard}
        readOnly
      />
      <Link href={`/${category}/${id}/reviews`}>
        <Text>{numberOfReviews || 0} review</Text>
      </Link>
    </Container>
  );
}
