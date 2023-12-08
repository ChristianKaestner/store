import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
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

      <ButtonStyled
        variant="outlined"
        startIcon={<MdFacebook color="#316FF6" />}
      >
        Facebook
      </ButtonStyled>
    </Container>
  );
}
