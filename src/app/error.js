'use client';

import { useEffect } from 'react';
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
        display: 'flex',
        flexDirection: 'column',
        px: 2,
        mt: 12,
        mb: 2,
      }}
    >
      <h2>Something went wrong!</h2>
    </Container>
  );
}
