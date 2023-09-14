import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '100px',
  padding: 8,
});
