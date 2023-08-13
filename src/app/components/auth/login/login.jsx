import { FormControl, Button, TextField } from '@mui/material';
import PasswordFiled from '../passwordField/passwordField';

export default function Login({
  toggleAuth,
  handleLogin,
  showPassword,
  handleClick,
}) {
  return (
    <FormControl
      sx={{ display: 'flex', mt: 2, width: { xs: '100%', sm: '60%' } }}
      component="form"
    >
      <TextField required id="outlined-required" label="Email" type="email" />
      <PasswordFiled showPassword={showPassword} handleClick={handleClick} />
      <Button
        variant="contained"
        sx={{ mt: 2, height: 48, bgcolor: 'primary.light' }}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button sx={{ mt: 2, height: 48 }} onClick={toggleAuth}>
        Register
      </Button>
    </FormControl>
  );
}
