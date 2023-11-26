import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Rating } from '@mui/material';
import CommonBtn from '../../reviews/commonBtn/commonBtn';
import UploadImage from '@/app/components/uploadImage/uploadImage';
import OnError from '@/app/components/Notifications/onError';
import { Container, Form } from '../addReview/addReviewModal.styled';
import { fetchImageFiles } from '../../../lib/functions';

const url = 'https://smokey-s3.s3.eu-central-1.amazonaws.com/reviews/';

export default function EditReviewModal({ review, handleEdit }) {
  const [fileList, setFileList] = useState([]);
  const [errUpload, setErrUpload] = useState(false);
  const isFetchDoneRef = useRef(false);

  const { id, rating, text, pros, cons, images } = review;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const imageFiles = await fetchImageFiles(images, url);
      setFileList(imageFiles);
      isFetchDoneRef.current = true;
    };

    if (images?.length && fileList.length === 0 && !isFetchDoneRef.current) {
      fetchData();
    }
  }, [images, fileList]);

  const onEditReview = data => {
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
    handleEdit(formData);
  };

  return (
    <Container>
      <Form
        component="form"
        onSubmit={handleSubmit(data => onEditReview(data))}
      >
        <Controller
          control={control}
          name="rating"
          defaultValue={+rating}
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
        <Controller
          control={control}
          name="text"
          defaultValue={text}
          type="text"
          rules={{ required: 'Text is required' }}
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              id="text"
              label="Text"
              type="text"
              onChange={onChange}
              value={value}
              multiline
              sx={{ mt: 4 }}
              inputProps={{
                style: {
                  height: '100px',
                  overflow: 'auto',
                },
              }}
            />
          )}
        />
        {errors?.text && <OnError text={errors?.text?.message} />}
        <Controller
          control={control}
          name="pros"
          defaultValue={pros}
          type="text"
          rules={{ required: 'Pros is required' }}
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              id="pros"
              label="Pros"
              type="text"
              onChange={onChange}
              value={value}
              sx={{ mt: 4 }}
            />
          )}
        />
        {errors?.pros && <OnError text={errors?.pros?.message} />}
        <Controller
          control={control}
          name="cons"
          defaultValue={cons}
          type="text"
          rules={{ required: 'Cons is required' }}
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              id="cons"
              label="Cons"
              type="text"
              onChange={onChange}
              value={value}
              sx={{ mt: 4 }}
            />
          )}
        />
        {errors?.cons && <OnError text={errors?.cons?.message} />}
        <UploadImage
          fileList={fileList}
          errUpload={errUpload}
          setFileList={setFileList}
          setErrUpload={setErrUpload}
        />
        <CommonBtn text="Edit a review" />
      </Form>
    </Container>
  );
}
