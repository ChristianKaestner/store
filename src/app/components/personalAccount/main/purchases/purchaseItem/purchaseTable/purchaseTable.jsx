import Image from 'next/image';
import { Button, TableRow, TableBody, TableCell } from '@mui/material';

export default function PurchaseTable({ item, handleCart, handleReview }) {
  const { product, quantity, buyingPrice } = item;
  return (
    <TableBody>
      <TableRow>
        <TableCell align="left">
          <Image
            src={product.images[0]}
            alt={`${product.title} image`}
            width={64}
            height={64}
          />
        </TableCell>
        <TableCell align="left">{product.title}</TableCell>
        <TableCell align="left">{buyingPrice}$</TableCell>
        <TableCell align="left">{quantity}</TableCell>
        <TableCell align="right">
          <Button
            onClick={() => handleReview(product.id)}
            variant="outlined"
            sx={{ height: 40, color: 'primary.light' }}
          >
            Add review
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button
            onClick={() => handleCart(product.id)}
            variant="contained"
            sx={{ height: 40, bgcolor: 'primary.light' }}
          >
            Add to cart
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
