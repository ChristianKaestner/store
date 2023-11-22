import styled from '@emotion/styled';
import { Box, ListItemText } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '48px',
  width: '100%',
  borderRadius: 4,
  backgroundColor: '#fff',
}));

export const ListItemStyled = styled(ListItemText)(({ theme }) => ({
  padding: '0 16px',
  '&:hover': { backgroundColor: theme.palette.primary.dim },
}));
