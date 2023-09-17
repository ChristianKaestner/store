import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ColumnCenter } from '@/app/lib/commonStyles';
export default function SuccessModal({ text }) {
  return (
    <ColumnCenter
      sx={{
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
    </ColumnCenter>
  );
}
