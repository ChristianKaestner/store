import { Typography, Box, Accordion } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90%',
  overflow: 'hidden',
  marginTop: 4,
});

export const AccordionStyled = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginBottom: 16,
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
  fontSize: '1em',
}));

export const Span = styled('span')(({ theme }) => ({
  color: theme.palette.primary.accent,
}));

export const IconEdit = styled(EditIcon)(({ theme }) => ({
  color: theme.palette.primary.dim,
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));
