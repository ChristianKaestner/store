import Image from 'next/image';
import { Divider, Paper, Typography, Tooltip, Rating } from '@mui/material';
import ReplyReview from './replyReview/replyReview';
import RateReview from './rateReview/rateReview';
import ReviewComment from '../reviewComment/reviewComment';
import VerifiedIcon from '@mui/icons-material/Verified';
import { visuallyHidden } from '@mui/utils';
import { ReviewInfoBlock, TextDate, TextName, Text } from './reviewItem.styled';
import { ImageBlock, ImageBlockItem, ReplyBlock } from './reviewItem.styled';
import { CommentsBlock } from './reviewItem.styled';
import { RowCenter } from '@/app/lib/commonStyles';

export default function ReviewItem({ review, onReplyClick, onImageClick }) {
  const { id, text, pros, cons, images, rating, date } = review;
  const { name, usefulness, comments } = review;
  return (
    <>
      <Paper
        elevation={3}
        sx={{ bgcolor: 'primary.main', mt: 4, p: 2, zIndex: 1, opacity: 0.9 }}
        component="li"
      >
        <ReviewInfoBlock>
          <RowCenter>
            <Tooltip title="Buyer" placement="top">
              <VerifiedIcon sx={{ color: 'primary.light' }} />
            </Tooltip>
            <TextName>{name}</TextName>
          </RowCenter>

          <RowCenter>
            <TextDate>{date}</TextDate>
          </RowCenter>
        </ReviewInfoBlock>
        <Divider />
        <>
          <Rating
            name="half-rating"
            precision={0.2}
            value={rating}
            readOnly
            sx={{ my: 2 }}
          />
          <Typography sx={{ color: 'primary.dim' }}>{text}</Typography>
          <Text>Pros</Text>
          <Typography sx={{ color: 'primary.dim' }}>{pros}</Typography>
          <Text>Cons </Text>
          <Typography sx={{ color: 'primary.dim' }}>{cons}</Typography>
          {images.length && (
            <ImageBlock component="ul">
              {images.map(image => {
                return (
                  <ImageBlockItem component="li" key={image}>
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
                  </ImageBlockItem>
                );
              })}
            </ImageBlock>
          )}
          <ReplyBlock>
            <ReplyReview onReplyClick={onReplyClick} />
            <RateReview usefulness={usefulness} />
          </ReplyBlock>
        </>
      </Paper>
      {comments?.length > 0 && (
        <>
          <Typography component="h4" sx={visuallyHidden}>
            Comments to review
          </Typography>
          <CommentsBlock component="ul">
            {comments.map(comment => {
              return <ReviewComment key={comment.id} comment={comment} />;
            })}
          </CommentsBlock>
        </>
      )}
    </>
  );
}
