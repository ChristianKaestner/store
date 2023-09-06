'use client';

import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Container, Box, Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import CardSwiper from '@/app/components/products/productsItem/cardSwiper/cardSwiper';

export default function Hookah() {
  const path = usePathname().split('/');
  path.splice(0, 1);
  const { id } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(id);
  const { title, images } = data;

  console.log(data);
  return (
    <>
      {!isLoading && (
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
          <Breadcrumbs crumbs={path} />
          <PageTitle title={title} />
          <Box sx={{ display: 'flex', flexDirection: 'row', height: 600 }}>
            <Box sx={{ display: 'flex', width: '50%', bgcolor: 'aliceblue' }}>
              {/* <CardSwiper images={images} /> */}
            </Box>
            <Box sx={{ display: 'flex', width: '50%', bgcolor: 'gainsboro' }}>
              <p>123</p>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
