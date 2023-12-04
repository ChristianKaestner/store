import { getUserInfo } from '@/app/lib/functions';
import EditInfoModal from '../../modal/editAccount/editAccount';
import { Text, IconEdit, Span, AccordionStyled } from '../order.styled';
import { AccordionSummary, AccordionDetails } from '@mui/material';

export default function OrderUser({
  user,
  expandedDetails,
  setExpandedDetails,
  handleEditDetails,
}) {
  const userInfo = getUserInfo(user);

  const handleEdit = data => {
    handleEditDetails(data);
  };

  return (
    <AccordionStyled defaultExpanded={false} expanded={expandedDetails}>
      <AccordionSummary
        expandIcon={<IconEdit />}
        onClick={() => setExpandedDetails(!expandedDetails)}
        sx={{ p: 2 }}
      >
        <Text>
          <Span>Details: </Span>
          {userInfo}
        </Text>
      </AccordionSummary>
      <AccordionDetails>
        <EditInfoModal
          user={user}
          handleEdit={handleEdit}
          httpError={null}
          editEmail={false}
        />
      </AccordionDetails>
    </AccordionStyled>
  );
}
