import { getUserAddress } from '@/app/lib/functions';
import EditAddressModal from '../../modal/editAddress/editAddress';
import { Text, IconEdit, Span, AccordionStyled } from '../order.styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';

export default function OrderAddress({
  user,
  expandedAddress,
  setExpandedAddress,
  handleEditAddress,
}) {
  const userAddress = getUserAddress(user);

  const handleEdit = async data => {
    handleEditAddress(data);
  };

  return (
    <AccordionStyled defaultExpanded={false} expanded={expandedAddress}>
      <AccordionSummary
        expandIcon={<IconEdit />}
        onClick={() => setExpandedAddress(!expandedAddress)}
        sx={{ p: 2 }}
      >
        <Text>
          <Span>Address: </Span>
          {userAddress}
        </Text>
      </AccordionSummary>
      <AccordionDetails>
        <EditAddressModal address={user.address} handleEdit={handleEdit} />
      </AccordionDetails>
    </AccordionStyled>
  );
}
