import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import ReviewItem from '../reviewItem/reviewItem';
import Modal from '../../modal/modal';
import { useModal } from '@/app/hooks/useModal';
import FullscreanImage from '../../modal/fullscreanReview/fullscreanReview';
import SuccessModal from '../../modal/successModal/successModal';
import { toggleSuccess } from '@/app/redux/modal/slice';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';
// import { useAuth } from '@/app/hooks/useAuth';
// import CommentReviewModal from '../reviewComment/modal/commentReviewModal';

export default function ReviewList({ reviews }) {
  // const [commentModal, setCommentModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState({});
  const [fullscrean, setFullscrean] = useState(false);

  const dispath = useDispatch();
  const { successModal } = useModal();
  // const { isLogin, user } = useAuth();

  // const handleWirteComment = () => {
  //   !isLogin ? setCommentModal(true) : dispath(toggleAccount(true));
  // };

  // const handleAddComment = data => {
  //   setCommentModal(false);
  //   dispath(toggleSuccess(true));
  //   console.log(data);
  // };

  const handleScaleImage = (id, image) => {
    const filtred = reviews.filter(review => review.id === id);
    const images = filtred[0].images;
    setSelectedImages({ images, picked: image });
    setFullscrean(true);
  };
  return (
    <>
      {reviews && (
        <Box component="ul" sx={{ listStyle: 'none' }}>
          <Typography component="h3" sx={visuallyHidden}>
            list of Product Reviews
          </Typography>
          {reviews.map(review => {
            return (
              <ReviewItem
                key={review.id}
                review={review}
                // onReplyClick={handleWirteComment}
                onImageClick={handleScaleImage}
              />
            );
          })}
        </Box>
      )}
      {/* {commentModal && (
        <Modal
          open={commentModal}
          close={() => setCommentModal(false)}
          title="Add comment"
          width="600px"
          height="auto"
          position="center"
        >
          <CommentReviewModal user={user} handleAddComment={handleAddComment} />
        </Modal>
      )} */}
      {fullscrean && (
        <Modal
          open={fullscrean}
          close={() => setFullscrean(false)}
          width="95vw"
          height="95vh"
          position="center"
        >
          <FullscreanImage dto={selectedImages} />
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
              'Your comment has been submitted for moderation and will appear on the site soon'
            }
          />
        </Modal>
      )}
    </>
  );
}
