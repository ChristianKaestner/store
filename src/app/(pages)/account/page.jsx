'use client';

import { Container } from '@mui/material';
import PersonalAccount from '@/app/components/personalAccount/personalAccount';
export default function Account() {
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
      <PersonalAccount />
    </Container>
  );
}
