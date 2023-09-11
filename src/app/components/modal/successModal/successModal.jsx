import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SuccessModal({ text }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CheckCircleIcon sx={{ fontSize: '10rem', color: 'success.light' }} />
      <Typography>{text}</Typography>
    </Box>
  );
}
