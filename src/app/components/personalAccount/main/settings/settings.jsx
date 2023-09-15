import { useState } from 'react';
import { Box, Paper, Divider, IconButton } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import { Row, Column, RowCenter } from '@/app/utils/commonStyles';
import { TextNeutral, TextBold, SubTitle } from '@/app/utils/commonStyles';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@/app/components/modal/modal';
import EditInfoModal from '@/app/components/modal/editAccount/editAccount';
import EditAddressModal from '@/app/components/modal/editAddress/editAddress';

export default function AccountSettings({ user }) {
  const [detailsModal, setDetailsModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);

  const { firstName, lastName, phone, email, address } = user;
  const { city, street, house, apartment } = address;

  const handleEditInfo = data => {
    // send request
    console.log(data);
    setDetailsModal(false);
  };

  const handleEditAddress = data => {
    // send request
    console.log(data);
    setAddressModal(false);
  };

  return (
    <Box sx={{ px: 2 }}>
      <PageTitle title="Personal information" sx={{ mt: 0 }} />
      <Paper
        elevation={3}
        sx={{
          p: 2,
        }}
      >
        <RowCenter>
          <SubTitle sx={{ mr: 2 }}>Personal details</SubTitle>
          <IconButton onClick={() => setDetailsModal(true)}>
            <EditIcon />
          </IconButton>
        </RowCenter>

        <Divider />
        <Row sx={{ mt: 2 }}>
          <Column>
            <TextNeutral>First name:</TextNeutral>
            <TextNeutral>Last name: </TextNeutral>
            <TextNeutral>Phone number: </TextNeutral>
            <TextNeutral>Email: </TextNeutral>
          </Column>
          <Column sx={{ ml: 2 }}>
            <TextBold>{firstName}</TextBold>
            <TextBold>{lastName}</TextBold>
            <TextBold>{phone}</TextBold>
            <TextBold>{email}</TextBold>
          </Column>
        </Row>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 2,
        }}
      >
        <RowCenter>
          <SubTitle sx={{ mr: 2 }}>Shipping address</SubTitle>
          <IconButton onClick={() => setAddressModal(true)}>
            <EditIcon />
          </IconButton>
        </RowCenter>
        <Divider />
        <Row sx={{ mt: 2 }}>
          <Column>
            <TextNeutral>City:</TextNeutral>
            <TextNeutral>Street: </TextNeutral>
            <TextNeutral>House: </TextNeutral>
            <TextNeutral>Apartment: </TextNeutral>
          </Column>
          <Column sx={{ ml: 6 }}>
            <TextBold>{city}</TextBold>
            <TextBold>{street}</TextBold>
            <TextBold>{house}</TextBold>
            <TextBold>{apartment}</TextBold>
          </Column>
        </Row>
      </Paper>
      {detailsModal && (
        <Modal
          title="Edit personal details"
          onClose={() => setDetailsModal(false)}
          maxHeight="540px"
          width="400px"
          position="center"
        >
          <EditInfoModal handleEdit={handleEditInfo} user={user} />
        </Modal>
      )}
      {addressModal && (
        <Modal
          title="Edit address"
          onClose={() => setAddressModal(false)}
          maxHeight="540px"
          width="400px"
          position="center"
        >
          <EditAddressModal handleEdit={handleEditAddress} address={address} />
        </Modal>
      )}
    </Box>
  );
}
