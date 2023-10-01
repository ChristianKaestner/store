import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

export const AddBlock = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  padding: 16,
  zIndex: 1,
  opacity: 0.9,
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.palette.primary.dim,
}));
