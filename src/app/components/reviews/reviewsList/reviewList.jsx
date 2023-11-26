import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ReviewItem from '../reviewItem/reviewItem';
import Modal from '../../modal/modal';
import FullscreanImage from '../../modal/fullscreanReview/fullscreanReview';
import { visuallyHidden } from '@mui/utils';

export default function ReviewList({ reviews, isProfile = false }) {
  const [selectedImages, setSelectedImages] = useState({});
  const [fullscrean, setFullscrean] = useState(false);

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
                onImageClick={handleScaleImage}
                isProfile={isProfile}
              />
            );
          })}
        </Box>
      )}
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
    </>
  );
}
