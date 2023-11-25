import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';
import ClearIcon from '@mui/icons-material/Clear';
import RotateRightIcon from '@mui/icons-material/RotateRight';

export const Container = styled(Box, {
  shouldForwardProp: prop => prop !== 'errUpload',
})(({ errUpload, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
  borderColor: errUpload
    ? theme.palette.primary.hot
    : theme.palette.primary.dim,
  padding: 16,
  marginTop: 32,
  '&:hover': {
    borderColor: errUpload
      ? theme.palette.primary.hot
      : theme.palette.primary.light,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.primary.dim,
}));

export const BtnStyled = styled(Button)(({ theme }) => ({
  minWidth: 120,
  height: 40,
  backgroundColor: theme.palette.primary.light,
}));

export const IconUpload = styled(CollectionsIcon)({
  fontSize: 40,
});

export const InputStyled = styled('input')({
  opacity: 0,
  width: 0,
  height: 0,
  lineHeight: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
});

export const ImagesBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  listStyle: 'none',
  marginTop: 16,
});

export const ImageContainer = styled(Box)({
  position: 'relative',
  paddingBottom: 16,
});

export const IconClear = styled(ClearIcon)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '1.25rem',
  color: theme.palette.primary.light,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));

export const IconRotate = styled(RotateRightIcon)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  fontSize: '1.25rem',
  color: theme.palette.primary.light,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));
