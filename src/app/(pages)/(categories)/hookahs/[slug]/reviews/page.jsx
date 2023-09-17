'use client';

import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Reviews from '@/app/components/reviews/reviews';

export default function Review() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const { slug } = useParams();

  const { data = [], isLoading } = useGetProductByIdQuery(slug);

  const reviewTitle = `Customer reviews of ${data.title?.toLowerCase()}`;
  return (
    <>
      {!isLoading && (
        <>
          <Breadcrumbs crumbs={path} title={data?.title} />
          <PageTitle title={reviewTitle} />

          {data.reviews?.length > 0 ? (
            <Reviews product={data} />
          ) : (
            <p>no reviews yet...</p>
          )}
        </>
      )}
    </>
  );
}
