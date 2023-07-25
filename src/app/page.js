import { Container } from '@mui/material';
import Hero from './components/hero/hero';
import Sidebar from './components/sidebar/sidebar';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'row', px: 24, my: 2 }}
    >
      <Sidebar />
      <Hero />
    </Container>
  );
}
