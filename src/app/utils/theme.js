'use client';
import { createTheme } from '@mui/material';

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#324376',
      light: '#586ba4',
      info: '#f5dd90',
      accent: '#f68e5f',
      hot: '#f76c5e',
    },
  },
});
