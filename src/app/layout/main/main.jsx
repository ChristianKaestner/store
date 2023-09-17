import { Container } from '@mui/material';

export default function Main({ children }) {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 12, mb: 2 }}
    >
      {children}
    </Container>
  );
}
