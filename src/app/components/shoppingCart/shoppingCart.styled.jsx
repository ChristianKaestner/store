import { Box,  } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90%',
  overflowY: 'auto',
  overflowX: 'hidden',
});
