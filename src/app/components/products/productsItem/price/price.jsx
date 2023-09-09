import { Typography } from '@mui/material';

export default function Price({ price, component = 'h4' }) {
  return (
    <Typography
      component={component}
      sx={{ fontWeight: 700, fontSize: 30, color: 'primary.hot' }}
    >
      {price}$
    </Typography>
  );
}
