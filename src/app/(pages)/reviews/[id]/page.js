'use client';

import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Container, Box } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ProductRating from '@/app/components/products/productsItem/rating/rating';
import ProductCode from '@/app/components/products/productsItem/productCode/productCode';
import Reviews from '@/app/components/reviews/reviews';

export default function Hookah() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const { id } = useParams();

  const { data = [], isLoading } = useGetProductByIdQuery(id);
  const { reviews, rating } = data;

  const reviewTitle = `Customer reviews of ${data?.title?.toLowerCase()}`;
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
          <Reviews product={data} />
        </Container>
      )}
    </>
  );
}
