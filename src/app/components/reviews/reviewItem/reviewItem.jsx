import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { deleteProductReview } from '@/app/redux/reviews/operations';
import { editProductReview } from '@/app/redux/reviews/operations';
import { Divider, Typography, IconButton, Rating, Box } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import Modal from '../../modal/modal';
import DeleteReviewModal from '../../modal/deleteReview/deleteReview';
import EditReviewModal from '../../modal/editReview/editReviewModal';
import { ReviewInfoBlock, TextDate, TextName, Text } from './reviewItem.styled';
import { ImageBlock, ImageBlockItem, PaperStyled } from './reviewItem.styled';
import { RowCenter } from '@/app/lib/commonStyles';
import { formatDate } from '@/app/lib/functions';
import { IconEdit, IconDelete } from './reviewItem.styled';

const URL = 'https://smokey-s3.s3.eu-central-1.amazonaws.com/reviews/';

export default function ReviewItem({
  review,
  onImageClick,
  isProfile,
  handleLoading,
}) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { id, text, pros, cons, images, rating, createdAt } = review;
  const { user } = review;
  const date = formatDate(createdAt);
  const dispatch = useDispatch();

  const handleEdit = async formData => {
    handleLoading(true);
    const response = await dispatch(editProductReview(formData));
    if (response.meta.requestStatus === 'fulfilled') {
      setEditModal(false);
    }
    handleLoading(false);
  };

  const handleDelete = async () => {
    handleLoading(true);
    const response = await dispatch(deleteProductReview(id));
    if (response.meta.requestStatus === 'fulfilled') {
      setDeleteModal(false);
    }
    handleLoading(false);
  };

  return (
    <>
      <PaperStyled elevation={3} component="li">
        <ReviewInfoBlock>
          <RowCenter>
            <VerifiedIcon sx={{ color: 'primary.light' }} />

            <TextName>{user.firstName}</TextName>
          </RowCenter>

          <RowCenter>
            <TextDate>{date}</TextDate>
            {isProfile && (
              <Box>
                <IconButton onClick={() => setEditModal(true)}>
                  <IconEdit />
                </IconButton>
                <IconButton onClick={() => setDeleteModal(true)}>
                  <IconDelete />
                </IconButton>
              </Box>
            )}
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
                        objectFit: 'cover',
                      }}
                    />
                  </ImageBlockItem>
                );
              })}
            </ImageBlock>
          )}
        </>
      </PaperStyled>
      {deleteModal && (
        <Modal
          open={deleteModal}
          close={() => setDeleteModal(false)}
          title="Delete review"
          width="600px"
          height="auto"
          position="center"
        >
          <DeleteReviewModal
            onDelete={handleDelete}
            onAbort={() => setDeleteModal(false)}
          />
        </Modal>
      )}
      {editModal && (
        <Modal
          open={editModal}
          close={() => setEditModal(false)}
          title="Edit review"
          width="600px"
          height="600px"
          position="center"
        >
          <EditReviewModal
            review={review}
            handleEdit={handleEdit}
            handleLoading={handleLoading}
          />
        </Modal>
      )}
    </>
  );
}
