import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)({
  width: '100%',
  height: 'auto',
  padding: 16,
  margin: '32px 0',
});

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '2rem',
  paddingLeft: 16,
  color: theme.palette.primary.text,
}));
