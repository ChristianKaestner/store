import { Container, Box, Text, ButtonProceed } from './totalPrice.styled';

export default function TotalPrice({ total, handleProceed }) {
  return (
    <Container>
      <Box>
        <Text>{total}$</Text>
        <ButtonProceed variant="contained" onClick={handleProceed}>
          Proceed
        </ButtonProceed>
      </Box>
    </Container>
  );
}
