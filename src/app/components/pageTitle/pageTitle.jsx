import { Typography } from '@mui/material';

export default function PageTitle({ title }) {
  return (
    <Typography variant="h1" sx={{ mt: 2, fontSize: 36, fontWeight: 500 }}>
      {title}
    </Typography>
  );
}
