'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';

export default function Loading({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
      <h1>SOMETHING WENT WORNG...</h1>
      <Image
        src="/error.png"
        alt="shopping cart image"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        style={{ zIndex: -1 }}
      />
    </Container>
  );
}
