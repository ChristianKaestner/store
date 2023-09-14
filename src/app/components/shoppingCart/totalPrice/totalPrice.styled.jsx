import { Box as MuiBox, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(MuiBox)({
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#fff',
  marginTop: 8,
});

export const Box = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '240px',
  height: '64px',
  border: '1px solid',
  borderColor: theme.palette.primary.light,
  borderRadius: '4px',
  backgroundColor: theme.palette.primary.main,
  marginRight: 4,
}));

export const Text = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
  color: '#fff',
});
