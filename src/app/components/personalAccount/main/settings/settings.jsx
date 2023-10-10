'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation';
import { logOut } from '@/app/redux/auth/operations';
import { useAuth } from '@/app/hooks/useAuth';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import PersonalDetails from './personalDetails/personalDeatils';
import ShippingAddress from './shippingAddress/ShippingAddress';
import AccountManagement from './accountManagment/accountManagement';
import Modal from '@/app/components/modal/modal';
import EditInfoModal from '@/app/components/modal/editAccount/editAccount';
import EditAddressModal from '@/app/components/modal/editAddress/editAddress';
import withAuth from '@/app/components/auth/withAuth';

function AccountSettings() {
  const [detailsModal, setDetailsModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);

  const { user } = useAuth();

  const dispath = useDispatch();

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

  const handleLogout = () => {
    dispath(logOut());
    redirect('/');
  };

  const handleDelete = () => {};

  return (
    <>
      <PageTitle title="Personal information" sx={{ mt: 0 }} />

      <PersonalDetails user={user} onClick={() => setDetailsModal(true)} />

      <ShippingAddress
        address={user.address}
        onClick={() => setAddressModal(true)}
      />

      <AccountManagement onDelete={handleDelete} onLogout={handleLogout} />

      {detailsModal && (
        <Modal
          open={detailsModal}
          close={() => setDetailsModal(false)}
          title="Edit personal details"
          width="400px"
          maxHeight="540px"
        >
          <EditInfoModal handleEdit={handleEditInfo} user={user} />
        </Modal>
      )}
      {addressModal && (
        <Modal
          open={addressModal}
          close={() => setAddressModal(false)}
          title="Edit address"
          width="400px"
          maxHeight="540px"
        >
          <EditAddressModal handleEdit={handleEditAddress} address={address} />
        </Modal>
      )}
    </>
  );
}

export default withAuth(AccountSettings);
