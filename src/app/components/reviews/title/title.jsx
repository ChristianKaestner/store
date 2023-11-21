'use client';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/products';
import { Typography } from '@mui/material';

export default function ReviewTitle() {
  const { slug } = useParams();

  const { data = [], isLoading } = useGetProductByIdQuery(slug);
  const reviewTitle = `Customer reviews of ${data?.title?.toLowerCase()}`;

  return (
    <>
      {!isLoading && (
        <Typography
          variant="h1"
          sx={{
            my: 2,
            fontWeight: 500,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            zIndex: 1,
            color: 'primary.dim',
          }}
        >
          {reviewTitle}
        </Typography>
      )}
    </>
  );
}
