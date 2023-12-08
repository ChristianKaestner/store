import { FcGoogle } from 'react-icons/fc';
import { Container, Text, ButtonStyled } from './social.styled';

export default function Social() {
  return (
    <Container>
      <Text>Log in as a user</Text>
      <a href="http://localhost:5000/auth/google/">
        <ButtonStyled variant="outlined" startIcon={<FcGoogle />}>
          Google
        </ButtonStyled>
      </a>
    </Container>
  );
}
