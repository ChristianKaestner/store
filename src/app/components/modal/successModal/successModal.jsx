import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SuccessModal({ text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100% - 106px)',

        textAlign: 'center',
      }}
    >
      <Box>
        <CheckCircleIcon sx={{ fontSize: '10rem', color: 'success.light' }} />
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
