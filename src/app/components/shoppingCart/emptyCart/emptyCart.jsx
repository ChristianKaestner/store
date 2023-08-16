import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function EmptyCart() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '64px auto 0',
      }}
    >
      <Image
        src="/cart.png"
        alt="image"
        width={400}
        height={300}
        priority="false"
      />
      <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
        Your shopping cart is empty
      </Typography>
    </Box>
  );
}
