import { Container } from '@mui/material';

export default function NotFound() {
  return (
    <>
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
        <p>page not found</p>
      </Container>
    </>
  );
}
