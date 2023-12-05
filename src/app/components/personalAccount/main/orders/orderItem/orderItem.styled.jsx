import { Accordion as MuiAccordion, Box } from '@mui/material';
import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import { Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  width: '100%',
  marginBottom: 16,
  backgroundColor: theme.palette.primary.main,
  opacity: 0.9,
  '&:last-child': { marginBottom: 32 },
}));

export const AccordionDetails = styled(MuiAccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Icon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 8,
  width: '100%',
  marginRight: 16,

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const Block = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 8,

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

export const TextAccent = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.primary.accent,
}));

export const ButtonStyled = styled(Button, {
  shouldForwardProp: prop => prop !== 'mute',
})(({ mute, theme }) => ({
  borderColor: mute ? theme.palette.primary.neutral : theme.palette.primary.dim,
  color: mute ? theme.palette.primary.neutral : theme.palette.primary.dim,
  width: 80,
  marginTop: 8,
  '&:hover': {
    borderColor: mute
      ? theme.palette.primary.neutral
      : theme.palette.primary.accent,
    color: mute ? theme.palette.primary.neutral : theme.palette.primary.accent,
  },
}));
