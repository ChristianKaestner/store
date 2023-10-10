import AccountSettings from '../../../components/personalAccount/main/settings/settings';
import { Box } from '@mui/material';
import { tmpUser } from '@/app/lib/tmpData';

export const metadata = {
  title: 'Profile - Settings',
  description:
    'Personal user information, shipping address, password change, account deletion',
};

export default function Settings() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountSettings user={tmpUser} />
    </Box>
  );
}
