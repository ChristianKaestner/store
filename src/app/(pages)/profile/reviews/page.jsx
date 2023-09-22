'use client';
import AccountReviews from '@/app/components/personalAccount/main/reviews/reviews';
import { ProfileContainer } from '@/app/lib/commonStyles';
import { tmpUser } from '@/app/lib/tmpData';

export default function Reviews() {
  const { reviews } = tmpUser;
  return (
    <ProfileContainer>
      <AccountReviews reviews={reviews} />
    </ProfileContainer>
  );
}
