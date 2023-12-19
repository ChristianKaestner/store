import Image from 'next/image';
import { Button, TableRow, TableBody, TableContainer } from '@mui/material';
import { Table, TableHead, Paper } from '@mui/material';
import { Cell } from './orderTable.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PRODUCT_IMAGE_URL } from '@/app/lib/constants';

export default function OrderTable({ products, handleCart }) {
  const media = useMediaQuery('(min-width:600px)');

  return (
    <TableContainer component={Paper} sx={{ bgcolor: 'primary.main' }}>
      <Table aria-label="order table">
        <TableHead>
          {media && (
            <TableRow>
              <Cell align="left"></Cell>
              <Cell align="left">Product</Cell>
              <Cell align="left">Price</Cell>
              <Cell align="left">Quantity</Cell>
              <Cell align="right"></Cell>
            </TableRow>
          )}
        </TableHead>
        {products.map(item => {
          const { product, quantity, buyingPrice } = item;
          return (
            <TableBody key={product.id}>
              {media ? (
                <TableRow>
                  <Cell align="left">
                    <Image
                      src={PRODUCT_IMAGE_URL + product.images[0]}
                      alt={`${product.title} image`}
                      width={64}
                      height={64}
                      style={{ borderRadius: 4 }}
                    />
                  </Cell>
                  <Cell align="left">{product.title}</Cell>
                  <Cell align="left">{buyingPrice}$</Cell>
                  <Cell align="left">{quantity}</Cell>
                  <Cell align="right">
                    <Button
                      onClick={() => handleCart(product.id)}
                      variant="contained"
                      sx={{ bgcolor: 'primary.light', width: 100 }}
                      disabled={item.status === 'Out of stock' ? true : false}
                    >
                      Cart
                    </Button>
                  </Cell>
                </TableRow>
              ) : (
                <>
                  <TableRow>
                    <Cell align="left" width="50%">
                      <Image
                        src={PRODUCT_IMAGE_URL + product.images[0]}
                        alt={`${product.title} image`}
                        width={64}
                        height={64}
                      />
                    </Cell>
                    <Cell align="left" width="50%">
                      {product.title}
                    </Cell>
                  </TableRow>
                  <TableRow>
                    <Cell align="left">Price: {buyingPrice}$</Cell>
                    <Cell align="left">Quantity: {quantity}</Cell>
                  </TableRow>
                  <TableRow>
                    <Cell colSpan={2}>
                      <Button
                        onClick={() => handleCart(product.id)}
                        variant="contained"
                        sx={{ width: '100%', bgcolor: 'primary.light' }}
                      >
                        Cart
                      </Button>
                    </Cell>
                  </TableRow>
                </>
              )}
            </TableBody>
          );
        })}
      </Table>
    </TableContainer>
  );
}
