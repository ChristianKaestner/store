import Link from 'next/link';
import { Typography, Box } from '@mui/material';
import Icon from './icon';
export default function Logo() {
  return (
    <Link
      href="/"
      style={{ display: 'flex', alignItems: 'center', height: 40 }}
    >
      <Box sx={{ width: 40, height: 40 }}>
        <Icon />
      </Box>
      <Typography
        variant="h5"
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          fontSize: '30px',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        S4U
      </Typography>
    </Link>
  );
}
