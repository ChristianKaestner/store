import { Typography } from '@mui/material';

export default function ProductCode({ id }) {
  return (
    <Typography sx={{ pr: 1, color: 'primary.neutral' }}>Code: {id}</Typography>
  );
}
