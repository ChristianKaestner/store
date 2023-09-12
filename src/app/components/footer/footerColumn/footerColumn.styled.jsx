import { styled } from '@mui/material/styles';
import { Box, Typography, OutlinedInput } from '@mui/material';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Column = styled(Box)({
  width: 'calc(70% / 4 - 40px)',
  '&:nth-of-type(2)': { width: '30%' },
  marginRight: '8px',
  '@media (max-width: 899px)': {
    width: '100%',
    marginRight: 0,
    marginBottom: '8px',
    '&:nth-of-type(2)': { width: '100%' },
  },
});

export const ColumnList = styled('ul')({ listStyle: 'none', flexWrap: 'wrap' });

export const ColumnTitle = styled(Typography)({
  color: '#fff',
  marginBottom: '8px',
  fontSize: '1.5rem',
});

export const ColumnText = styled(Typography)({
  color: '#fff',
  marginBottom: '4px',
});

const commonStyle = {
  color: '#fff',
  width: '40px',
  height: '40px',
  '&:hover': {
    fill: '#f68e5f',
  },
};

export const YoutubeIcon = styled(FaYoutube)(commonStyle);

export const InstagramIcon = styled(FaInstagram)(commonStyle);

export const FacebookIcon = styled(FaFacebook)(commonStyle);

export const InputSubscribe = styled(OutlinedInput, {
  shouldForwardProp: prop => prop !== 'err',
})(({ err, theme }) => ({
  backgroundColor: '#fff',
  width: '100%',
  marginTop: 2,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : 'rgba(0, 0, 0, 0.23)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.light,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.light,
  },
}));
