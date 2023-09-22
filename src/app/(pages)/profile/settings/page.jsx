'use client';
import AccountSettings from '@/app/components/personalAccount/main/settings/settings';
import { ProfileContainer } from '@/app/lib/commonStyles';
import { tmpUser } from '@/app/lib/tmpData';

export default function Settings() {
  return (
    <ProfileContainer>
      <AccountSettings user={tmpUser} />
    </ProfileContainer>
  );
}
