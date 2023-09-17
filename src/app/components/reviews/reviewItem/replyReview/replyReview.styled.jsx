import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ReplyBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  marginRight: 8,
  '&:hover': { color: theme.palette.primary.accent },
}));
