import { useState } from 'react';
import AccountAside from './sideBar/sideBar';
import AccountMain from './main/accountMain';
import { tmpUser } from '@/app/utils/tmpData';
import { Box } from '@mui/material';

//need to add modal view
export default function PersonalAccount() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <AccountAside
        handleChange={index => setValue(index)}
        value={value}
        user={tmpUser}
      />
      <AccountMain value={value} user={tmpUser} />
    </Box>
  );
}
