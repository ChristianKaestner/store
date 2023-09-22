'use client';
import AccountFavorites from '@/app/components/personalAccount/main/favorites/favorites';
import { ProfileContainer } from '@/app/lib/commonStyles';
import { tmpUser } from '@/app/lib/tmpData';

export default function Favorites() {
  const { favorites } = tmpUser;
  return (
    <ProfileContainer>
      <AccountFavorites favorites={favorites} />
    </ProfileContainer>
  );
}
