import Image from 'next/image';
import { Container, Typography } from '@mui/material';

export const metadata = {
  title: 'Smokey - Policy',
  description: 'Sales Policy at Smokey',
};

export default function Policy() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        minHeight: 500,
        px: 2,
        pointerEvents: 'none',
      }}
    >
      <Typography
        component="h1"
        sx={{
          textAlign: 'center',
          color: 'primary.text',
          fontSize: '2rem',
          fontWeight: 500,
        }}
      >
        IN THE PROCESS..
      </Typography>

      <Image
        src="/progress.webp"
        alt="error image"
        fill={true}
        sizes="100%"
        style={{ height: '100%', objectFit: 'contain', zIndex: -1 }}
      />
    </Container>
  );
}
