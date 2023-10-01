import { useDispatch } from 'react-redux';
import { AccordionSummary } from '@mui/material';
import { Accordion, Icon, Container, Block } from './orderItem.styled';
import { AccordionDetails } from './orderItem.styled';
import { cartAdd } from '@/app/redux/cart/slice';
import OrderStatus from './orderStatus/orderStatus';
import { Column, TextNeutral, TextBold } from '@/app/lib/commonStyles';
import OrderTable from './orderTable/orderTable';

export default function OrderItem({ order }) {
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
      defaultExpanded={false}
      component="li"
      sx={{
        bgcolor: 'primary.main',
        opacity: 0.9,
        '&:last-child': { mb: 4 },
      }}
    >
      <AccordionSummary
        expandIcon={<Icon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ p: 2 }}
      >
        <Container>
          <Block>
            <OrderStatus status={status} />
            <Column sx={{ mr: 2 }}>
              <TextNeutral>Order status</TextNeutral>
              <TextBold>{status}</TextBold>
            </Column>
          </Block>

          <Column>
            <TextNeutral>Order amount</TextNeutral>
            <TextBold>{amount}$</TextBold>
          </Column>
          <Column>
            <TextNeutral>Order date</TextNeutral>
            <TextBold>{date}</TextBold>
          </Column>
        </Container>
      </AccordionSummary>
      <AccordionDetails>
        <OrderTable
          goods={goods}
          handleCart={handleCart}
          handleReview={handleReview}
        />
      </AccordionDetails>
    </Accordion>
  );
}
