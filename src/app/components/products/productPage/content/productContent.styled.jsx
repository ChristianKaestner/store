import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Block = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const BlockBtn = styled(Box)({
  position: 'relative',
  width: 240,
  marginLeft: 16,
});

export const PaperStyled = styled(Paper, {
  shouldForwardProp: prop => prop !== 'isover',
})(({ isover }) => ({
  filter: isover ? 'grayscale(1)' : 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 32,
  padding: 16,
}));

// export const PaperStyled = styled(Paper)({
//   position: 'relative',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginTop: 32,
//   padding: 16,
// });
