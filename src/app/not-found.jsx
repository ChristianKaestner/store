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
        justifyContent: 'center',
        px: 2,
        flexGrow: 1,
      }}
    >
      <h1>404 | PAGE NOT FOUND</h1>

      <Image
        src="/404.png"
        alt="shopping cart image"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        style={{ zIndex: -1 }}
      />
    </Container>
  );
}
