import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BlockBtn = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 32,
});

export const PaginationStyled = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 32,
  '& .MuiPaginationItem-root': {
    color: theme.palette.primary.dim,
  },
  '&.MuiPagination-root ul svg': {
    color: theme.palette.primary.dim,
  },
}));
