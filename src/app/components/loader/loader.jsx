import { Container, Circle, SvgFilter } from './loader.styled';

export default function Loader({ startDisappearing }) {
  return (
    <Container startDisappearing={startDisappearing}>
      <Circle></Circle>
      <SvgFilter />
    </Container>
  );
}
