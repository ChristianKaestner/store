'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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

export default function Reviews({ product }) {
  const [reviewModal, setReviewModal] = useState(false);
  const dispath = useDispatch();
  const { isLogin, user } = useAuth();
  const { successModal } = useModal();
  const { images, title, price, id, reviews } = product;

  const handleWirteReview = () => {
    !isLogin ? setReviewModal(true) : dispath(toggleAccount(true));
  };

  const handleAddReview = formData => {
    setReviewModal(false);
    dispath(toggleSuccess(true));
    console.log(formData);
  };

  return (
    <>
      <HeadBlock>
        <ProductRating product={product} size="medium" />
        <ProductCode id={id} />
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
        <SideBar image={images[0]} title={title} price={price} id={id} />
        {reviewModal && (
          <Modal
            onClose={() => setReviewModal(false)}
            title="Add review"
            width="600px"
            height="600px"
            position="center"
            open={reviewModal}
          >
            <AddReviewModal user={user} handleAddReview={handleAddReview} />
          </Modal>
        )}
        {successModal && (
          <Modal
            onClose={() => dispath(toggleSuccess(false))}
            title="Successfully"
            width="600px"
            height="auto"
            position="center"
            open={successModal}
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
  );
}
