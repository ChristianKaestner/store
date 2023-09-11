'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { useAuth } from '@/app/hooks/useAuth';
import { toggleAccount, toggleSuccess } from '@/app/redux/modal/slice';
import { useModal } from '@/app/hooks/useModal';
import SideBar from './sideBar/sideBar';
import AddReview from './addReview/addReview';
import ReviewItem from './reviewItem/reviewItem';
import Modal from '../modal/modal';
import AddReviewModal from './addReview/modal/addReviewModal';
import CommentReviewModal from './reviewComment/modal/commentReviewModal';
import SuccessModal from '../modal/successModal/successModal';
import FullscreanImage from '../modal/fullscreanReview/fullscreanReview';

export default function Reviews({ product }) {
  const [reviewModal, setReviewModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [fullscrean, setFullscrean] = useState(false);
  const [selectedImages, setSelectedImages] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const dispath = useDispatch();
  const { isLogin, user } = useAuth();
  const { successModal } = useModal();
  const { images, title, price, id, reviews } = product;
  // console.log(product);
  const handleWirteReview = () => {
    !isLogin ? setReviewModal(true) : dispath(toggleAccount(true));
  };

  const handleWirteComment = () => {
    !isLogin ? setCommentModal(true) : dispath(toggleAccount(true));
  };

  const handleAddReview = formData => {
    setSuccessMsg(
      'Your review has been sent for moderation and will appear on the site soon'
    );
    setReviewModal(false);
    dispath(toggleSuccess(true));
    console.log(formData);
  };

  const handleAddComment = data => {
    setSuccessMsg(
      'Your comment has been submitted for moderation and will appear on the site soon'
    );
    setCommentModal(false);
    dispath(toggleSuccess(true));
    console.log(data);
  };

  const handleScaleImage = (id, image) => {
    const filtred = reviews.filter(review => review.id === id);
    const images = filtred[0].images;
    setSelectedImages({ images, picked: image });
    setFullscrean(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '70%' },
          mr: 2,
        }}
      >
        <AddReview onWriteReview={handleWirteReview} />
        {reviews && (
          <Box component="ul" sx={{ listStyle: 'none' }}>
            {reviews.map(review => {
              return (
                <ReviewItem
                  key={review.id}
                  review={review}
                  onReplyClick={handleWirteComment}
                  onImageClick={handleScaleImage}
                />
              );
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
          <AddReviewModal user={user} handleAddReview={handleAddReview} />
        </Modal>
      )}
      {commentModal && (
        <Modal
          onClose={() => setCommentModal(false)}
          title="Add comment"
          width="600px"
          height="auto"
          position="center"
        >
          <CommentReviewModal user={user} handleAddComment={handleAddComment} />
        </Modal>
      )}
      {successModal && (
        <Modal
          onClose={() => dispath(toggleSuccess(false))}
          title="Successfully"
          width="600px"
          height="auto"
          position="center"
        >
          <SuccessModal text={successMsg} />
        </Modal>
      )}
      {fullscrean && (
        <Modal
          onClose={() => setFullscrean(false)}
          width="95vw"
          height="95vh"
          position="center"
        >
          <FullscreanImage dto={selectedImages} />
        </Modal>
      )}
    </Box>
  );
}
