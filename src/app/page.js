import { Container, Box } from '@mui/material';
import Hero from './components/hero/hero';
import Sidebar from './components/sidebar/sidebar';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'row', px: 24, my: 2 }}
    >
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { lg: 'calc(100% - 366px)', sm: '100%' },
        }}
      >
        <Hero />
        <p>fsfsdf</p>
      </Box>
    </Container>
  );
}
