import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

export const AddBlock = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
});

export const Text = styled(Typography)({
  fontSize: '1.25rem',
});
