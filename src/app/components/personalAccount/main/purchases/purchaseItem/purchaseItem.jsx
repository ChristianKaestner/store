import { useDispatch } from 'react-redux';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Typography, Paper, TableCell, Button } from '@mui/material';
import { TableContainer, Table, TableRow, TableHead } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cartAdd } from '@/app/redux/cart/slice';
import OrderStatus from './orderStatus/orderStatus';
import { Column, RowCenter, TextNeutral } from '@/app/utils/commonStyles';
import PurchaseTable from './purchaseTable/purchaseTable';

export default function PurchaseItem({ order }) {
  const { date, amount, status, goods } = order;

  const dispatch = useDispatch();

  const handleCart = id => {
    dispatch(cartAdd(id));
    console.log(id);
  };

  const handleReview = id => {
    // redirect to review page
    console.log(id);
  };

  return (
    <Accordion
      sx={{ width: '100%', mb: 2 }}
      defaultExpanded={false}
      component="li"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.light' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ p: 2 }}
      >
        <RowCenter
          sx={{ justifyContent: 'space-between', width: '100%', mr: 2 }}
        >
          <RowCenter>
            <OrderStatus status={status} />
            <Column sx={{ ml: 2 }}>
              <TextNeutral>Order status</TextNeutral>
              <Typography sx={{ fontWeight: 500 }}>{status}</Typography>
            </Column>
          </RowCenter>

          <Column>
            <TextNeutral>Order amount</TextNeutral>
            <Typography sx={{ fontWeight: 500 }}>{amount}$</Typography>
          </Column>
          <Column>
            <TextNeutral>Order date</TextNeutral>
            <Typography sx={{ fontWeight: 500 }}>{date}</Typography>
          </Column>
        </RowCenter>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="purchase table">
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            {goods.map(item => {
              return (
                <PurchaseTable
                  key={item.product.id}
                  item={item}
                  handleCart={handleCart}
                  handleReview={handleReview}
                />
              );
            })}
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
