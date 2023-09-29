'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
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
  const dispath = useDispatch();
  const { isLogin, user } = useAuth();
  const { successModal } = useModal();
  const { slug } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(slug);
  const { images, title, price, id, reviews } = data;

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
      {!isLoading && (
        <>
          <HeadBlock>
            <ProductRating product={data} size="medium" />
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
                open={reviewModal}
                close={() => setReviewModal(false)}
                title="Add review"
                width="600px"
                height="600px"
                position="center"
              >
                <AddReviewModal user={user} handleAddReview={handleAddReview} />
              </Modal>
            )}
            {successModal && (
              <Modal
                open={successModal}
                close={() => dispath(toggleSuccess(false))}
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
