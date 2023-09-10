import { Box, IconButton, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function RateReview({ usefulness }) {
  const { pros, cons } = usefulness;
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', flexDirection: 'row', gap: 2, listStyle: 'none' }}
    >
      <Box
        component="li"
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <IconButton
          sx={{
            color: 'primary.light',
            mr: 1,
            '&:hover': { color: 'primary.accent' },
          }}
        >
          <ThumbUpOffAltIcon />
        </IconButton>
        <Typography sx={{ color: 'primary.light' }}>{pros}</Typography>
      </Box>
      <Box
        component="li"
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <IconButton
          sx={{
            color: 'primary.light',
            mr: 1,
            '&:hover': { color: 'primary.accent' },
          }}
        >
          <ThumbDownOffAltIcon />
        </IconButton>
        <Typography sx={{ color: 'primary.light' }}>{cons}</Typography>
      </Box>
    </Box>
  );
}
