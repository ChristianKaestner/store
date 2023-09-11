import { useForm, Controller } from 'react-hook-form';
import { FormControl, Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

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

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            minHeight: 40,
            width: 200,
            bgcolor: 'primary.light',
            margin: '32px auto 0',
          }}
        >
          Leave a comment
        </Button>
      </FormControl>
    </Box>
  );
}
