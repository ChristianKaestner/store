import { FcGoogle } from 'react-icons/fc';
import { Container, Text, ButtonStyled } from './social.styled';
import { Box } from '@mui/material';

export default function Social() {
  return (
    <Box>
      <Text>Log in as a user</Text>
      <a href="http://localhost:5000/auth/google/">
        <ButtonStyled variant="outlined" startIcon={<FcGoogle />}>
          Google
        </ButtonStyled>
      </a>
    </Box>
  );
}
