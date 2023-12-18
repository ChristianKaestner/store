import { FcGoogle } from 'react-icons/fc';
import { Text, ButtonStyled } from './social.styled';
import { Box } from '@mui/material';
import { SERVER_URL } from '@/app/lib/constants';
export default function Social() {
  return (
    <Box>
      <Text>Log in as a user</Text>
      <a href={`${SERVER_URL}auth/google/`}>
        <ButtonStyled variant="outlined" startIcon={<FcGoogle />}>
          Google
        </ButtonStyled>
      </a>
    </Box>
  );
}
