import { Typography } from '@mui/material';

export default function PageTitle({ title }) {
  return (
    <Typography variant="h1" sx={{ my: 2, fontSize: 36, fontWeight: 500 }}>
      {title}
    </Typography>
  );
}
