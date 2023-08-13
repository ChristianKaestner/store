import { Box, Typography, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';

export default function Social() {
  return (
    <Box sx={{ width: { xs: '100%', sm: '40%' }, mt: 2 }}>
      <Typography>Log in as a user</Typography>
      <Button
        variant="outlined"
        sx={{ width: '100%', height: 48, mt: 2 }}
        startIcon={<FcGoogle />}
      >
        Google
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '100%', height: 48, mt: 2 }}
        startIcon={<MdFacebook />}
      >
        Facebook
      </Button>
    </Box>
  );
}
