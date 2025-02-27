import Image from 'next/image';
import { Container, Typography } from '@mui/material';

export const metadata = {
  title: 'Smokey - About us',
  description: 'About smokey',
};

export default function About() {
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
        text
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
