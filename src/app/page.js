import { Container, Box } from '@mui/material';
import Hero from './components/hero/hero';
import Sidebar from './components/sidebar/sidebar';
import ProductsList from './components/productsList/productsList';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'row', px: 2, my: 2 }}
    >
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { lg: 'calc(100% - 366px)', xs: '100%' },
        }}
      >
        <Hero />
        <ProductsList />
      </Box>
    </Container>
  );
}
