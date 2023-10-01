import { Typography } from '@mui/material';

export default function PageTitle({ title }) {
  return (
    <Typography
      variant="h1"
      sx={{
        my: 2,
        fontWeight: 500,
        color: 'primary.dim',
        fontSize: { xs: '1.5rem', sm: '2rem' },
        zIndex: 1,
      }}
    >
      {title}
    </Typography>
  );
}
