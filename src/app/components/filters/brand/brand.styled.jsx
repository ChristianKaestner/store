import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Counter = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -16,
    top: 13,
    backgroundColor: theme.palette.primary.dim,
    color: '#939393',
  },
}));
