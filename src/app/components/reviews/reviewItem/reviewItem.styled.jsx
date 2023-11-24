import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';

export const ReviewInfoBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const UserBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ImageBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: 16,
  margin: '16px 0',
});

export const ImageBlockItem = styled(Box)({
  position: 'relative',
  width: 120,
  height: 80,
  '&:hover': {
    cursor: 'pointer',
  },
});

export const ReplyBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const CommentsBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  listStyle: 'none',
}));

export const TextDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.neutral,
  marginRight: 16,
}));

export const TextName = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 500,
  marginLeft: 8,
  color: theme.palette.primary.dim,
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginTop: 8,
  color: theme.palette.primary.subsidiary,
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: 32,
  padding: 16,
  zIndex: 1,
  opacity: 0.9,
  '&:first-of-type': { marginTop: 0 },
}));
