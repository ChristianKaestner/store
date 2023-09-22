'use client';
import AccountOrders from '@/app/components/personalAccount/main/orders/orders';
import { ProfileContainer } from '@/app/lib/commonStyles';
import { tmpUser } from '@/app/lib/tmpData';

export default function Purchases() {
  const { orders } = tmpUser;
  return (
    <ProfileContainer>
      <AccountOrders orders={orders} />
    </ProfileContainer>
  );
}
