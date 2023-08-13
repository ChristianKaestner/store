import Image from 'next/image';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CartItem({ product }) {
  return (
    <Box component="li" sx={{ display: 'flex', flexDirection: 'row' }}>
      <Image
        src={product.images[0]}
        width={80}
        height={51}
        alt="image"
        priority={false}
      />
      <Typography>{product.title}</Typography>
      <Typography>{product.price}</Typography>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
      <Divider />
    </Box>
  );
}
