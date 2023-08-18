import Link from 'next/link';
import { BsFillCartCheckFill, BsCart } from 'react-icons/bs';
import { CardContent, Box, Typography, IconButton } from '@mui/material';

export default function CardDescription({
  subTitle,
  title,
  price,
  cartIcon,
  handleCart,
}) {
  return (
    <CardContent>
      <Box>
        <Link href="/">
          <Typography sx={{ textAlign: 'center', mb: 1 }}>
            {subTitle}
          </Typography>
          <Typography
            sx={{
              height: 80,
              maxHeight: 80,
              overflow: 'hidden',
              fontSize: 18,
            }}
          >
            {title.toUpperCase()}
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, fontSize: 30, color: 'primary.hot' }}
        >
          {price}$
        </Typography>
        <IconButton onClick={handleCart}>
          {cartIcon === 'empty' ? (
            <BsCart style={{ fontSize: 30, fill: '#f68e5f' }} />
          ) : (
            <BsFillCartCheckFill style={{ fontSize: 30, fill: '#f68e5f' }} />
          )}
        </IconButton>
      </Box>
    </CardContent>
  );
}
