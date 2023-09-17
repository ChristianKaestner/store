import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, Box, TextField, Rating } from '@mui/material';
import CommonBtn from '../../reviews/commonBtn/commonBtn';
import UploadImage from '@/app/components/uploadImage/uploadImage';

export default function AddReviewModal({ user, handleAddReview }) {
  const [fileList, setFileList] = useState([]);
  const [errUpload, setErrUpload] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const onAddReview = data => {
    const { comment, pros, cons, rating, name } = data;
    const formData = new FormData();
    formData.append('images', fileList);
    formData.append('comment', comment);
    formData.append('pros', pros);
    formData.append('cons', cons);
    formData.append('rating', rating);
    formData.append('name', name);
    handleAddReview(formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <FormControl
        sx={{ display: 'flex', mt: 4, pr: 2, width: '100%', overflowY: 'auto' }}
        component="form"
        onSubmit={handleSubmit(data => onAddReview(data))}
      >
        <Controller
          control={control}
          name="rating"
          defaultValue={null}
          type="number"
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

        <TextField
          required
          id="comment"
          label="Comment"
          type="text"
          {...register('comment')}
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

        <Controller
          control={control}
          name="name"
          defaultValue={'user name from props'}
          type="text"
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              id="name"
              label="Name"
              type="text"
              value={value}
              onChange={onChange}
              sx={{ mt: 4 }}
            />
          )}
        />
        <CommonBtn text="Leave a review" />
      </FormControl>
    </Box>
  );
}
