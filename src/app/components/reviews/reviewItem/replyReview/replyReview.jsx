import { Box, Button } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

export default function ReplyReview() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button
        startIcon={<ReplyIcon sx={{ transform: 'rotate(180deg)' }} />}
        sx={{
          color: 'primary.light',
          mr: 1,
          '&:hover': { color: 'primary.accent' },
        }}
      >
        Reply to review
      </Button>
    </Box>
  );
}
