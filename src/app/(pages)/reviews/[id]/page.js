'use client';

import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Container } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import { Typography, Box, Paper } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ProductRating from '@/app/components/products/productsItem/rating/rating';
import ProductCode from '@/app/components/products/productsItem/productCode/productCode';
import SideBar from '@/app/components/reviews/sideBar/sideBar';

export default function Hookah() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const { id } = useParams();

  const { data = [], isLoading } = useGetProductByIdQuery(id);
  const { reviews, rating, images, title, price } = data;

  const reviewTitle = `customer reviews of ${data?.title?.toLowerCase()}`;
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
          <PageTitle title={reviewTitle} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 1,
            }}
          >
            <ProductRating
              rating={rating}
              size="medium"
              reviewUrl="/reviews"
              totalReviews={reviews.length}
            />
            <ProductCode id={id} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <SideBar image={images[0]} title={title} price={price} id={id} />
          </Box>
        </Container>
      )}
    </>
  );
}
