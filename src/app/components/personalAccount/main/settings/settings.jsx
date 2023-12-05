'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from 'next/navigation';
import { logOut, deleteUser } from '../../../../redux/auth/operations';
import { updateUser, updateAddress } from '../../../../redux/auth/operations';
import { useAuth } from '../../../../hooks/useAuth';
import PageTitle from '../../../../components/pageTitle/pageTitle';
import PersonalDetails from './personalDetails/personalDeatils';
import ShippingAddress from './shippingAddress/ShippingAddress';
import AccountManagement from './accountManagment/accountManagement';
import Modal from '../../../../components/modal/modal';
import EditInfoModal from '../../../../components/modal/editAccount/editAccount';
import EditAddressModal from '../../../../components/modal/editAddress/editAddress';
import ConfirmDelModal from '../../../../components/modal/confirmDeletion/confirmDeletion';
import withAuth from '../../../../components/auth/withAuth';
import Loader from '@/app/components/loading/loaderBackdrop';

function AccountSettings() {
  const [detailsModal, setDetailsModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);

  const { user, error, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !error) {
      setDetailsModal(false);
      setAddressModal(false);
    }
  }, [user, error, isLoading]);

  const dispatch = useDispatch();

  const handleEditInfo = async data => {
    setReqLoading(true);
    await dispatch(updateUser(data));
    setReqLoading(false);
  };

  const handleEditAddress = async data => {
    setReqLoading(true);
    await dispatch(updateAddress(data));
    setReqLoading(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    redirect('/');
  };

  const handleDelete = () => {
    dispatch(deleteUser());
    redirect('/');
  };

  return (
    <>
      <PageTitle title="Personal information" sx={{ mt: 0 }} />
      <PersonalDetails user={user} onClick={() => setDetailsModal(true)} />
      <ShippingAddress
        address={user.address}
        onClick={() => setAddressModal(true)}
      />
      <AccountManagement
        onDelete={() => setDeleteModal(true)}
        onLogout={handleLogout}
      />
      {detailsModal && (
        <Modal
          open={detailsModal}
          close={() => setDetailsModal(false)}
          title="Edit personal details"
          width="400px"
          maxHeight="540px"
        >
          <EditInfoModal
            handleEdit={handleEditInfo}
            user={user}
            httpError={error}
          />
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
            address={user.address}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal
          open={deleteModal}
          close={() => setDeleteModal(false)}
          title="Confirm profile deletion"
          width="400px"
          maxHeight="540px"
        >
          <ConfirmDelModal
            handleDelete={handleDelete}
            handleAbort={() => setDeleteModal(false)}
          />
        </Modal>
      )}
      <Loader isLoading={isLoading || reqLoading} />
    </>
  );
}

AccountSettings.displayName = 'AccountSettings';
export const AccountSettingsWithAuth = withAuth(AccountSettings);
