'use client';
import { createTheme } from '@mui/material';

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
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
      main: '#001219',
      light: '#005f73',
      subsidiary: '#0a9396',
      w: '#94d2bd',
      info: '#e9d8a6',
      accent: '#ee9b00',
      hot: '#F46145',
      dim: '#f5f6fa',
      text: '#221f1f',
      neutral: '#747474',
      badge: '#939393',
      iconbtn: '#ffffff33',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '.MuiInputBase-input.MuiOutlinedInput-input': {
            color: theme.palette.primary.dim,
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dim,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.MuiOutlinedInput': {
            zIndex: 2,
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.dim,
        }),

        shrink: ({ theme }) => ({
          color: `${theme.palette.primary.dim} !important`,
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          color: `${theme.palette.primary.dim} !important`,
        }),
        root: ({ theme }) => ({
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dim,
          },
          '&:hover': {
            '.MuiSvgIcon-root ': {
              fill: theme.palette.primary.accent,
              transform: 'scale(1.1)',
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline ': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
        }),
        icon: ({ theme }) => ({
          fill: theme.palette.primary.dim,
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.dim,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.light,
          },
          '&.MuiMenuItem-root.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.light,
          '&.Mui-checked': {
            '& svg': {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          ul: {
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: theme.palette.primary.light,
              color: '#fff',
            },
            '& svg': {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiSpeedDial: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiFab-primary': {
            width: 46,
            height: 46,
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        paragraph: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h1: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h2: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h3: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h4: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h5: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h6: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
      },
    },

    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.dim,
            color: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.iconbtn,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.primary.accent,
          },
        }),
      },
    },
  },
});
