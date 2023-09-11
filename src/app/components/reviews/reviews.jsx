'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount } from '@/app/redux/modal/slice';
import SideBar from './sideBar/sideBar';
import AddReview from './addReview/addReview';
import ReviewItem from './reviewItem/reviewItem';
import Modal from '../modal/modal';
import AddReviewModal from './addReview/modal/addReviewModal';

export default function Reviews({ product }) {
  const [reviewModal, setReviewModal] = useState(false);
  const dispath = useDispatch();
  const { isLogin, user } = useAuth();
  const { images, title, price, id, reviews } = product;

  const handleWirteReview = () => {
    !isLogin ? setReviewModal(true) : dispath(toggleAccount(true));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          mr: 2,
        }}
      >
        <AddReview onWriteReview={handleWirteReview} />
        {reviews && (
          <Box component="ul" sx={{ listStyle: 'none' }}>
            {reviews.map(review => {
              return <ReviewItem key={review.id} review={review} />;
            })}
          </Box>
        )}
      </Box>
      <SideBar image={images[0]} title={title} price={price} id={id} />
      {reviewModal && (
        <Modal
          onClose={() => setReviewModal(false)}
          title="Add review"
          width="600px"
          height="600px"
          position="center"
        >
          <AddReviewModal user={user} setReviewModal={setReviewModal} />
        </Modal>
      )}
    </Box>
  );
}
