import { Typography } from '@mui/material';

export default function OnError({ text }) {
  return (
    <Typography sx={{ fontSize: '0.9rem', color: 'primary.hot' }}>
      {text}
    </Typography>
  );
}
