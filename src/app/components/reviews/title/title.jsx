import { Typography } from '@mui/material';

export default function ReviewTitle({ title }) {
  const reviewTitle = `Customer reviews of ${title?.toLowerCase()}`;

  return (
    <Typography
      variant="h1"
      sx={{
        my: 2,
        fontWeight: 500,
        fontSize: { xs: '1.5rem', sm: '2rem' },
        zIndex: 1,
        color: 'primary.dim',
      }}
    >
      {reviewTitle}
    </Typography>
  );
}
