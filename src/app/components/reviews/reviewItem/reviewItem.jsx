import Image from 'next/image';
import { Divider, Typography, Tooltip, Rating } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { ReviewInfoBlock, TextDate, TextName, Text } from './reviewItem.styled';
import { ImageBlock, ImageBlockItem, PaperStyled } from './reviewItem.styled';
import { RowCenter } from '@/app/lib/commonStyles';
import { formatDate } from '@/app/lib/functions';
// import { ReplyBlock } from './reviewItem.styled';
// import { CommentsBlock } from './reviewItem.styled';
// import { visuallyHidden } from '@mui/utils';
// import ReplyReview from './replyReview/replyReview';
// import RateReview from './rateReview/rateReview';
// import ReviewComment from '../reviewComment/reviewComment';

const URL = 'https://smokey-s3.s3.eu-central-1.amazonaws.com/reviews/';

export default function ReviewItem({ review, onImageClick }) {
  const { id, text, pros, cons, images, rating, createdAt } = review;
  const { user } = review;
  const date = formatDate(createdAt);

  return (
    <>
      <PaperStyled elevation={3} component="li">
        <ReviewInfoBlock>
          <RowCenter>
            <Tooltip title="Buyer" placement="top">
              <VerifiedIcon sx={{ color: 'primary.light' }} />
            </Tooltip>
            <TextName>{user.firstName}</TextName>
          </RowCenter>

          <RowCenter>
            <TextDate>{date}</TextDate>
          </RowCenter>
        </ReviewInfoBlock>
        <Divider />
        <>
          <Rating
            name="half-rating"
            precision={0.5}
            value={+rating}
            readOnly
            sx={{ my: 2 }}
          />
          <Typography sx={{ color: 'primary.dim' }}>{text}</Typography>
          <Text>Pros</Text>
          <Typography sx={{ color: 'primary.dim' }}>{pros}</Typography>
          <Text>Cons </Text>
          <Typography sx={{ color: 'primary.dim' }}>{cons}</Typography>
          {images && images?.length && (
            <ImageBlock component="ul">
              {images.map(image => {
                return (
                  <ImageBlockItem component="li" key={image}>
                    <Image
                      key={image}
                      src={URL + image}
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
          {/* <ReplyBlock>
            <ReplyReview onReplyClick={onReplyClick} />
            <RateReview usefulness={usefulness} />
          </ReplyBlock> */}
        </>
      </PaperStyled>
      {/* {comments?.length > 0 && (
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
      )} */}
    </>
  );
}
