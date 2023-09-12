import { Badge as MuiBadge } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Badge = styled(MuiBadge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.light,
  },
}));
