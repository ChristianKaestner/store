'use client';

import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Container } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Reviews from '@/app/components/reviews/reviews';

export default function Review() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const { id } = useParams();

  const { data = [], isLoading } = useGetProductByIdQuery(id);

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

          {data.reviews.length > 0 ? (
            <Reviews product={data} />
          ) : (
            <p>no reviews yet...</p>
          )}
        </Container>
      )}
    </>
  );
}
