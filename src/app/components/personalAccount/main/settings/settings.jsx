'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logOut } from '@/app/redux/auth/operations';
import { useAuth } from '@/app/hooks/useAuth';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import PersonalDetails from './personalDetails/personalDeatils';
import ShippingAddress from './shippingAddress/ShippingAddress';
import AccountManagement from './accountManagment/accountManagement';
import Modal from '@/app/components/modal/modal';
import EditInfoModal from '@/app/components/modal/editAccount/editAccount';
import EditAddressModal from '@/app/components/modal/editAddress/editAddress';

export default function AccountSettings() {
  const [detailsModal, setDetailsModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);

  const { isLogin, isLoading, user } = useAuth();
  console.log(user);

  const dispath = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      redirect('/');
    }
  }, [isLogin]);

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
  };

  const handleDelete = () => {};

  return (
    <>
      {isLogin && !isLoading && (
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
              <EditAddressModal
                handleEdit={handleEditAddress}
                address={address}
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
}
