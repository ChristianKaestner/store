import Image from 'next/image';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { Tooltip, Rating } from '@mui/material';
import ReplyReview from './replyReview/replyReview';
import RateReview from './rateReview/rateReview';
import ReviewComment from '../reviewComment/reviewComment';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function ReviewItem({ review, onReplyClick, onImageClick }) {
  const { id, text, pros, cons, images, rating, date } = review;
  const { name, usefulness, comments } = review;
  return (
    <>
      <Paper elevation={3} sx={{ mt: 4, p: 2 }} component="li">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Tooltip title="Buyer" placement="top">
              <VerifiedIcon sx={{ color: 'primary.light' }} />
            </Tooltip>
            <Typography sx={{ fontSize: '1.25rem', fontWeight: 500, ml: 1 }}>
              {name}
            </Typography>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Typography sx={{ color: 'primary.neutral', mr: 2 }}>
              {date}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Rating
            name="half-rating"
            precision={0.2}
            value={rating}
            readOnly
            sx={{ my: 2 }}
          />
          <Typography>{text}</Typography>
          <Typography sx={{ fontWeight: 500, mt: 1 }}>Pros</Typography>
          <Typography>{pros}</Typography>
          <Typography sx={{ fontWeight: 500, mt: 1 }}>Cons </Typography>
          <Typography>{cons}</Typography>
          {images.length && (
            <Box
              component="ul"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                listStyle: 'none',
                gap: 2,
                py: 2,
              }}
            >
              {images.map(image => {
                return (
                  <Box
                    component="li"
                    key={image}
                    sx={{
                      position: 'relative',
                      width: 120,
                      height: 80,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Image
                      key={image}
                      src={image}
                      alt="Product photo from review"
                      fill={true}
                      sizes="100%"
                      priority="false"
                      onClick={() => onImageClick(id, image)}
                      style={{
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              mt: 1,
            }}
          >
            <ReplyReview onReplyClick={onReplyClick} />
            <RateReview usefulness={usefulness} />
          </Box>
        </Box>
      </Paper>
      {comments?.length > 0 && (
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            listStyle: 'none',
          }}
        >
          {comments.map(comment => {
            return <ReviewComment key={comment.id} comment={comment} />;
          })}
        </Box>
      )}
    </>
  );
}
