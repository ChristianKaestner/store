'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getuserReviews } from '@/app/redux/reviews/operations';
import { useReviews } from '@/app/hooks/useReviews';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ReviewList from '@/app/components/reviews/reviewsList/reviewList';
import withAuth from '@/app/components/auth/withAuth';

function AccountReviews() {
  const { reviews, product, isLoading } = useReviews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuserReviews());
  }, [dispatch]);

  return (
    <>
      <PageTitle title="Product Reviews" />
      {reviews.length > 0 && <ReviewList reviews={reviews} isProfile={true} />}
    </>
  );
}

AccountReviews.displayName = 'AccountReviews';
export const AccountReviewsWithAuth = withAuth(AccountReviews);
