import { Box } from '@mui/material';
import AccountAside from '../../components/personalAccount/sideBar/sideBar';

export default function ProfileLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <AccountAside />
      <>{children}</>
    </Box>
  );
}
