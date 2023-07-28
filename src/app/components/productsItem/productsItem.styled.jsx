import styled from '@emotion/styled';
import Image from 'next/image';
import { Card } from '@mui/material';

export const ImageStyled = styled(Image)`
  transform: scale(0.9);
`;

export const StyledCard = styled(Card)(() => ({
  width: 345,
  '&:hover': {
    backgroundColor: 'red',
    [`${ImageStyled}`]: {
      transform: 'scale(3)',
    },
  },
}));

// &:hover {
// ${ImageStyled} {
//     transform: scale(1.1);
// }
