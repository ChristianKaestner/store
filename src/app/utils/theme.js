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
    primary: { main: '#324376' },
    secondary: { main: '#586ba4' },
    error: { main: '#f76c5e' },
    warning: { main: '#f68e5f' },
    info: { main: '#f5dd90' },
    success: { main: '#f5dd90' },
  },
});
