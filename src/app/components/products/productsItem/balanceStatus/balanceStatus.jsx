import { Typography } from '@mui/material';

export default function BalanceStatus({ status }) {
  return (
    <Typography sx={{ fontWeight: 500, fontSize: 16, color: 'primary.light' }}>
      {status}
    </Typography>
  );
}
