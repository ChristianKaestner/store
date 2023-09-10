import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, Button, TextField, Rating, Box } from '@mui/material';

export default function AddReviewModal() {
  const { register, handleSubmit, control } = useForm();

  const imagePicker = useRef(null);

  const handleAddReview = data => {
    console.log(data);
  };

  const handlePick = () => {
    imagePicker.current.click();
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
        onSubmit={handleSubmit(data => handleAddReview(data))}
      >
        <Controller
          name="images"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div style={{ height: 200, backgroundColor: 'aliceblue' }}>
              <label>
                <Button variant="contained" onClick={handlePick} type="button">
                  Upload
                </Button>
                <input
                  ref={imagePicker}
                  type="file"
                  name="images"
                  onChange={e => {
                    field.onChange(e.target.files);
                  }}
                  multiple
                  accept="image/*,.png,.jpeg,.webp"
                  style={{
                    opacity: 0,
                    width: 0,
                    height: 0,
                    lineHeight: 0,
                    overflow: 'hidden',
                    margin: 0,
                    padding: 0,
                  }}
                />
              </label>
            </div>
          )}
        />
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

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 4, height: 48, bgcolor: 'primary.light' }}
        >
          Leave a review
        </Button>
      </FormControl>
    </Box>
  );
}
