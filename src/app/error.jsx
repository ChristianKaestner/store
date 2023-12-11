'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        SOMETHING WENT WORNG...
      </Typography>

      <Image
        src="/error.png"
        alt="error image"
        fill={true}
        sizes="100%"
        style={{ height: '100%', objectFit: 'contain', zIndex: -1 }}
      />
    </Container>
  );
}
