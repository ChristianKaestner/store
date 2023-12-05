import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Smokey - Profile',
  description: 'Profile page',
};

export default function Profile() {
  redirect('/profile/settings');
}
