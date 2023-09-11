import Link from 'next/link';
import { Typography } from '@mui/material';

export default function ProductTitle({ path, title }) {
  return (
    <Link href={path}>
      <Typography
        sx={{
          height: 40,
          maxHeight: 40,
          overflow: 'hidden',
          fontSize: 14,
          mb: 1,
          '&:hover': {
            color: 'primary.accent',
            textDecoration: 'underline',
          },
        }}
      >
        {title.toUpperCase()}
      </Typography>
    </Link>
  );
}
