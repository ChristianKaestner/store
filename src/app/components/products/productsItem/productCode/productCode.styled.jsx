import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
  paddingRight: 8,
}));
