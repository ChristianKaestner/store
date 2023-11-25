import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled(Box)({
  marginTop: 16,
});

export const BtnBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 32,
  marginTop: 32,
});

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 500,
  color: theme.palette.primary.dim,
  textAlign: 'center',
}));

export const BtnStyled = styled(Button)({
  width: 120,
});
