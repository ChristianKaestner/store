import styled from '@emotion/styled';
import { Box, FormControl } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90%',
  overflowY: 'auto',
  overflowX: 'hidden',
});

export const Form = styled(FormControl)({
  display: 'flex',
  marginTop: 32,
  paddingRight: 16,
  width: '100%',
  overflowY: 'auto',
});
