import { Accordion as MuiAccordion, Box } from '@mui/material';
import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

export const Accordion = styled(MuiAccordion)({
  width: '100%',
  marginBottom: 16,
});

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
  alignItems: 'center',
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
