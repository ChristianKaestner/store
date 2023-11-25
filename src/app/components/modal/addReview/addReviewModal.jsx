import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Rating } from '@mui/material';
import CommonBtn from '../../reviews/commonBtn/commonBtn';
import UploadImage from '@/app/components/uploadImage/uploadImage';
import OnError from '@/app/components/Notifications/onError';
import { Container, Form } from './addReviewModal.styled';

export default function AddReviewModal({ id, handleAddReview }) {
  const [fileList, setFileList] = useState([]);
  const [errUpload, setErrUpload] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onAddReview = data => {
    const { pros, cons, rating, text } = data;
    const formData = new FormData();
    formData.append('id', id);
    formData.append('text', text);
    formData.append('pros', pros);
    formData.append('cons', cons);
    formData.append('rating', +rating);
    fileList.forEach(file => {
      formData.append(`images`, file);
    });
    handleAddReview(formData);
  };

  return (
    <Container>
      <Form component="form" onSubmit={handleSubmit(data => onAddReview(data))}>
        <Controller
          control={control}
          name="rating"
          defaultValue={null}
          type="number"
          rules={{ required: 'Rating is required' }}
          render={({ field: { onChange, value } }) => (
            <Rating
              name="product-rating"
              id="rating"
              value={Number(value)}
              precision={0.5}
              size="large"
              onChange={onChange}
              sx={{
                fontSize: '3rem',
                width: '50%',
              }}
            />
          )}
        />
        {errors?.rating && <OnError text={errors?.rating?.message} />}
        <TextField
          required
          id="text"
          label="Text"
          type="text"
          {...register('text')}
          multiline
          sx={{ mt: 4 }}
          inputProps={{
            style: {
              height: '100px',
              overflow: 'auto',
            },
          }}
        />
        <TextField
          required
          id="pros"
          label="Pros"
          type="text"
          {...register('pros')}
          sx={{ mt: 4 }}
        />
        <TextField
          required
          id="cons"
          label="Cons"
          type="text"
          {...register('cons')}
          sx={{ mt: 4 }}
        />
        <UploadImage
          fileList={fileList}
          errUpload={errUpload}
          setFileList={setFileList}
          setErrUpload={setErrUpload}
        />
        <CommonBtn text="Leave a review" />
      </Form>
    </Container>
  );
}
