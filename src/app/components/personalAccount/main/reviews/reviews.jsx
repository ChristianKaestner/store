'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getuserReviews } from '@/app/redux/reviews/operations';
import { useReviews } from '@/app/hooks/useReviews';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ReviewList from '@/app/components/reviews/reviewsList/reviewList';
import withAuth from '@/app/components/auth/withAuth';
import Loader from '@/app/components/loading/loaderBackdrop';

function AccountReviews() {
  const [reqLoading, setReqLoading] = useState(false);
  const { reviews, isLoading } = useReviews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuserReviews());
  }, [dispatch]);

  return (
    <>
      <PageTitle title="Product reviews" />
      {reviews.length > 0 && (
        <ReviewList
          reviews={reviews}
          isProfile={true}
          handleLoading={val => setReqLoading(val)}
        />
      )}
      <Loader isLoading={isLoading || reqLoading} />
    </>
  );
}

AccountReviews.displayName = 'AccountReviews';
export const AccountReviewsWithAuth = withAuth(AccountReviews);
