import { useState } from 'react';
import { Box, Paper, Divider, IconButton } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import { Row, Column, RowCenter } from '@/app/utils/commonStyles';
import EditIcon from '@mui/icons-material/Edit';
import { DataText, AccountText, SubTitle } from './settings.styled';
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
          <SubTitle>Personal details</SubTitle>
          <IconButton onClick={() => setDetailsModal(true)}>
            <EditIcon />
          </IconButton>
        </RowCenter>

        <Divider />
        <Row sx={{ mt: 2 }}>
          <Column>
            <DataText>First name:</DataText>
            <DataText>Last name: </DataText>
            <DataText>Phone number: </DataText>
            <DataText>Email: </DataText>
          </Column>
          <Column sx={{ ml: 2 }}>
            <AccountText>{firstName}</AccountText>
            <AccountText>{lastName}</AccountText>
            <AccountText>{phone}</AccountText>
            <AccountText>{email}</AccountText>
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
          <SubTitle>Shipping address</SubTitle>
          <IconButton onClick={() => setAddressModal(true)}>
            <EditIcon />
          </IconButton>
        </RowCenter>
        <Divider />
        <Row sx={{ mt: 2 }}>
          <Column>
            <DataText>City:</DataText>
            <DataText>Street: </DataText>
            <DataText>House: </DataText>
            <DataText>Apartment: </DataText>
          </Column>
          <Column sx={{ ml: 6 }}>
            <AccountText>{city}</AccountText>
            <AccountText>{street}</AccountText>
            <AccountText>{house}</AccountText>
            <AccountText>{apartment}</AccountText>
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
