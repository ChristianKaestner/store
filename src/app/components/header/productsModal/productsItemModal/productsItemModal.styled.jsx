import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)({
  marginLeft: 16,
  marginTop: 16,
  width: '100%',
});

export const CatTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
  fontWeight: 500,
  fontSize: '1.5rem',
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
}));

export const Column = styled(Box)({
  width: '25%',
  listStyle: 'none',
});

export const ItemsBlock = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  gap: 32,
  listStyle: 'none',
  marginTop: 16,
  height: '88%',
  padding: 16,
});

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '1.25rem',
  fontWeight: 500,
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
  fontSize: '1.25rem',
  lineHeight: 2,
  '&:hover': {
    color: theme.palette.primary.accent,
    textDecoration: 'underline',
  },
}));
