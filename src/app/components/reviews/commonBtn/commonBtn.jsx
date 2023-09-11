import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function CommonBtn({ text }) {
  return (
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
      {text}
    </Button>
  );
}
