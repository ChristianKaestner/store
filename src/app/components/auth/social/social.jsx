import { Box, Typography, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';

export default function Social() {
  return (
    <Box sx={{ width: { xs: '100%', sm: '40%' }, mt: 2 }}>
      <Typography sx={{ color: 'primary.dim' }}>Log in as a user</Typography>
      <Button
        variant="outlined"
        sx={{
          width: '100%',
          height: 48,
          mt: 2,
          color: 'primary.dim',
          borderColor: 'primary.dim',
          '&:hover': { borderColor: 'primary.light' },
        }}
        startIcon={<FcGoogle />}
      >
        Google
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: '100%',
          height: 48,
          mt: 2,
          color: 'primary.dim',
          borderColor: 'primary.dim',
          '&:hover': { borderColor: 'primary.light' },
        }}
        startIcon={<MdFacebook color="#316FF6" />}
      >
        Facebook
      </Button>
    </Box>
  );
}
