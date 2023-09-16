import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
  width: '100%',
  height: '460px',
  padding: 16,
  margin: '32px 0',
});

export const Text = styled(Typography)({
  fontWeight: 500,
  fontSize: '2rem',
  paddingLeft: 16,
});

export const IconNext = styled(NavigateNextIcon)({
  fontSize: '2.5rem',
});

export const IconPrev = styled(NavigateBeforeIcon)({
  fontSize: '2.5rem',
});
