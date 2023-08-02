import { Container, Box } from '@mui/material';
import Hero from './components/hero/hero';
import Sidebar from './components/sidebar/sidebar';
import ProductsList from './components/productsList/productsList';
import Categories from './components/categories/categories';
import { images } from '../app/utils/tmpData';
import { categories } from '@/app/utils/tmpData';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, my: 2 }}
    >
      {/* <Sidebar /> */}
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { lg: 'calc(100% - 366px)', xs: '100%' },
        }}
      > */}
      <Hero images={images} />
      <Categories categories={categories} />
      <ProductsList />
      {/* </Box> */}
    </Container>
  );
}
