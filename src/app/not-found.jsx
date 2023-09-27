import Image from 'next/image';
import { Container } from '@mui/material';

export default function NotFound() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: 500,
        px: 2,
      }}
    >
      <h1>404 | PAGE NOT FOUND</h1>

      <Image
        src="/404.png"
        alt="not found image"
        fill={true}
        sizes="100%"
        style={{ height: '100%', objectFit: 'contain', zIndex: -1 }}
      />
    </Container>
  );
}
