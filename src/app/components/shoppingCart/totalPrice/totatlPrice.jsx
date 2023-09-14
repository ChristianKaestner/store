import { Button } from '@mui/material';
import { Container, Box, Text } from './totalPrice.styled';
export default function TotalPrice({ total }) {
  return (
    <Container>
      <Box>
        <Text>{total}$</Text>
        <Button variant="contained" sx={{ bgcolor: 'primary.light' }}>
          Checkout
        </Button>
      </Box>
    </Container>
  );
}
