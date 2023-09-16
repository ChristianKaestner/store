import Image from 'next/image';
import { Button, TableRow, TableBody, TableContainer } from '@mui/material';
import { Table, TableHead, Paper } from '@mui/material';
import { Cell } from './purchaseTable.styled';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PurchaseTable({ goods, handleCart, handleReview }) {
  const media = useMediaQuery('(min-width:600px)');

  return (
    <TableContainer component={Paper}>
      <Table aria-label="purchase table">
        <TableHead>
          {media && (
            <TableRow>
              <Cell align="left"></Cell>
              <Cell align="left">Product</Cell>
              <Cell align="left">Price</Cell>
              <Cell align="left">Quantity</Cell>
              <Cell align="right"></Cell>
              <Cell align="right"></Cell>
            </TableRow>
          )}
        </TableHead>
        {goods.map(item => {
          const { product, quantity, buyingPrice } = item;

          return (
            <TableBody key={product.id}>
              {media ? (
                <TableRow>
                  <Cell align="left">
                    <Image
                      src={product.images[0]}
                      alt={`${product.title} image`}
                      width={64}
                      height={64}
                    />
                  </Cell>
                  <Cell align="left">{product.title}</Cell>
                  <Cell align="left">{buyingPrice}$</Cell>
                  <Cell align="left">{quantity}</Cell>
                  <Cell align="right">
                    <Button
                      onClick={() => handleReview(product.id)}
                      variant="outlined"
                      sx={{ color: 'primary.light' }}
                    >
                      Review
                    </Button>
                  </Cell>
                  <Cell align="right">
                    <Button
                      onClick={() => handleCart(product.id)}
                      variant="contained"
                      sx={{ bgcolor: 'primary.light' }}
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
                        src={product.images[0]}
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
                    <Cell>
                      <Button
                        onClick={() => handleReview(product.id)}
                        variant="outlined"
                        sx={{ width: '100%', color: 'primary.light' }}
                      >
                        Review
                      </Button>
                    </Cell>
                    <Cell>
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
