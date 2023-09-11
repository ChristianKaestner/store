import { useForm, Controller } from 'react-hook-form';
import { FormControl, TextField, Box } from '@mui/material';
import CommonBtn from '../../commonBtn/commonBtn';

export default function CommentReviewModal({ user, handleAddComment }) {
  const { register, handleSubmit, control } = useForm();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <FormControl
        sx={{ display: 'flex', width: '100%', overflowY: 'auto' }}
        component="form"
        onSubmit={handleSubmit(data => handleAddComment(data))}
      >
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
        <CommonBtn text="Leave a comment" />
      </FormControl>
    </Box>
  );
}
