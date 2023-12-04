import { Container, Box, Text, ButtonPay } from './orderPaymentBtn.styled';

export default function PayBtn({ total, handlePayment }) {
  return (
    <Container>
      <Box>
        <Text>{total}$</Text>
        <ButtonPay variant="contained" onClick={handlePayment}>
          Pay
        </ButtonPay>
      </Box>
    </Container>
  );
}
