'use client';

import PageTitle from '@/app/components/pageTitle/pageTitle';
import ReviewList from '@/app/components/reviews/reviewsList/reviewList';
import withAuth from '@/app/components/auth/withAuth';
import { tmpUser } from '@/app/lib/tmpData';

function AccountReviews() {
  const { reviews } = tmpUser;
  return (
    <>
      <PageTitle title="Product Reviews" />
      <ReviewList reviews={reviews} />
    </>
  );
}

AccountReviews.displayName = 'AccountReviews';
export const AccountReviewsWithAuth = withAuth(AccountReviews);
