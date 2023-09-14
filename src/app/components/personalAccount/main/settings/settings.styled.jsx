import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AccountText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  marginLeft: 8,
  color: theme.palette.primary.light,
}));

export const DataText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 400,
  color: theme.palette.primary.neutral,
}));

export const SubTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 500,
  marginRight: 8,
});
