import { useDispatch } from 'react-redux';
import { AccordionSummary, Box } from '@mui/material';
import { addCart } from '@/app/redux/cart/operations';
import { editOrder } from '@/app/redux/order/operations';
import { togglePayment } from '@/app/redux/modal/slice';
import OrderTable from './orderTable/orderTable';
import OrderStatus from './orderStatus/orderStatus';
import { Accordion, Icon, Container, Block } from './orderItem.styled';
import { AccordionDetails, TextAccent, ButtonStyled } from './orderItem.styled';
import { Column, TextBold } from '@/app/lib/commonStyles';
import { formatDate } from '@/app/lib/functions';

export default function OrderItem({ order }) {
  const { createdAt, total, status, items, id } = order;
  const date = formatDate(createdAt);

  const dispatch = useDispatch();

  const handleCart = id => {
    const payload = { items: [{ productId: id, quantity: 1 }] };
    dispatch(addCart(payload));
  };

  const handleEditOrder = e => {
    e.stopPropagation();
    if (status !== 'pending') return;
    dispatch(editOrder(id));
  };

  const handlePay = e => {
    e.stopPropagation();
    if (status !== 'pending') return;
    dispatch(togglePayment(true));
  };

  return (
    <Accordion defaultExpanded={false} component="li">
      <AccordionSummary expandIcon={<Icon />} sx={{ p: 2 }}>
        <Container>
          <Block>
            <OrderStatus status={status} />
            <Column sx={{ mr: 2 }}>
              <TextAccent>Order status</TextAccent>
              <TextBold>{status}</TextBold>
            </Column>
          </Block>

          <Column>
            <TextAccent>Pay</TextAccent>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <ButtonStyled
                variant="outlined"
                mute={status !== 'pending'}
                onClick={handlePay}
              >
                Pay
              </ButtonStyled>
              <ButtonStyled
                variant="outlined"
                mute={status !== 'pending'}
                onClick={handleEditOrder}
              >
                Cancel
              </ButtonStyled>
            </Box>
          </Column>

          <Column>
            <TextAccent>Order amount</TextAccent>
            <TextBold>{total}$</TextBold>
          </Column>
          <Column>
            <TextAccent>Order date</TextAccent>
            <TextBold>{date}</TextBold>
          </Column>
        </Container>
      </AccordionSummary>
      <AccordionDetails>
        <OrderTable products={items} handleCart={handleCart} />
      </AccordionDetails>
    </Accordion>
  );
}
