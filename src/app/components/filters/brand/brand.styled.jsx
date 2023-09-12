import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Counter = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -13,
    top: 13,
    padding: '0 4px',
    bgcolor: theme.palette.primary.dim,
    color: '#939393',
  },
}));
