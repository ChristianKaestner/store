'use client';

import PageTitle from '@/app/components/pageTitle/pageTitle';
import ReviewList from '@/app/components/reviews/reviewsList/reviewList';

export default function AccountReviews({ reviews }) {
  return (
    <>
      <PageTitle title="Product Reviews" />
      <ReviewList reviews={reviews} />
    </>
  );
}
