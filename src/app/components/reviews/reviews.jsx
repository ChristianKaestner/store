'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { getProductReviews } from '@/app/redux/reviews/operations';
import { useReviews } from '@/app/hooks/useReviews';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount, toggleSuccess } from '@/app/redux/modal/slice';
import { useModal } from '@/app/hooks/useModal';
import SideBar from './sideBar/sideBar';
import AddReview from './addReview/addReview';
import Modal from '../modal/modal';
import AddReviewModal from '../modal/addReview/addReviewModal';
import SuccessModal from '../modal/successModal/successModal';
import ReviewList from './reviewsList/reviewList';
import ProductRating from '../products/productsItem/rating/rating';
import ProductCode from '../products/productsItem/productCode/productCode';
import { HeadBlock, ReviewBlock, MainBlock } from './reviews.styled';

export default function Reviews() {
  const [reviewModal, setReviewModal] = useState(false);
  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { successModal } = useModal();
  const { reviews, product, isLoading } = useReviews();
  const { slug } = useParams();

  useEffect(() => {
    // console.log('send request with slug ', slug);
    dispatch(getProductReviews(slug));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(product);
  //   console.log(isLoading);
  // }, [product, isLoading]);

  const handleWirteReview = () => {
    // setReviewModal(true);
    isLogin ? setReviewModal(true) : dispatch(toggleAccount(true));
  };

  const handleAddReview = formData => {
    setReviewModal(false);
    dispatch(toggleSuccess(true));
  };

  return (
    <>
      {!isLoading && product && (
        <>
          <HeadBlock>
            <ProductRating product={product} size="medium" />
            <ProductCode id={product.id} />
          </HeadBlock>
          <MainBlock>
            <ReviewBlock component="section">
              <AddReview onWriteReview={handleWirteReview} />
              {reviews.length > 0 ? (
                <ReviewList reviews={reviews} />
              ) : (
                <p>no reviews yet...</p>
              )}
            </ReviewBlock>
            <SideBar
              image={product.images[0]}
              title={product.title}
              price={product.price}
              id={product.id}
            />
            {reviewModal && (
              <Modal
                open={reviewModal}
                close={() => setReviewModal(false)}
                title="Add review"
                width="600px"
                height="600px"
                position="center"
              >
                <AddReviewModal
                  id={product.id}
                  handleAddReview={handleAddReview}
                />
              </Modal>
            )}
            {successModal && (
              <Modal
                open={successModal}
                close={() => dispatch(toggleSuccess(false))}
                title="Successfully"
                width="600px"
                height="auto"
                position="center"
              >
                <SuccessModal
                  text={
                    'Your review has been sent for moderation and will appear on the site soon'
                  }
                />
              </Modal>
            )}
          </MainBlock>
        </>
      )}
    </>
  );
}
