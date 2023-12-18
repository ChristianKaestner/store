import Image from 'next/image';
import { Container } from '../shoppingCart.styled';

export default function EmptyCart() {
  return (
    <Container>
      <Image
        src="/cart.webp"
        alt="shopping cart"
        fill={true}
        sizes="100%"
        style={{ height: '100%', zIndex: -1 }}
      />
    </Container>
  );
}
