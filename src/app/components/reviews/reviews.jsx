import { Box } from '@mui/material';
import SideBar from './sideBar/sideBar';
import AddReview from './addReview/addReview';
import ReviewItem from './reviewItem/reviewItem';

export default function Reviews({ product }) {
  const { images, title, price, id, reviews } = product;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          bgcolor: 'aliceblue',
          mr: 2,
        }}
      >
        <AddReview />
        {reviews &&
          reviews.map(review => {
            return (
              <Box id={review.id}>
                <ReviewItem review={review} />
              </Box>
            );
          })}
      </Box>
      <SideBar image={images[0]} title={title} price={price} id={id} />
    </Box>
  );
}
