import { FormControl, Button, TextField } from '@mui/material';
import PasswordFiled from '../passwordField/passwordField';

export default function Register({
  toggleAuth,
  handleRegister,
  showPassword,
  handleClick,
}) {
  return (
    <FormControl
      sx={{ display: 'flex', mt: 2, width: { xs: '100%', sm: '60%' } }}
      component="form"
    >
      <TextField required id="outlined-required" label="First name" />
      <TextField
        required
        id="outlined-required"
        label="Last name"
        sx={{ mt: 2 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Phone number"
        sx={{ mt: 2 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Email"
        sx={{ mt: 2 }}
        type="email"
      />
      <PasswordFiled showPassword={showPassword} handleClick={handleClick} />
      <Button
        variant="contained"
        sx={{ mt: 2, height: 48, bgcolor: 'primary.light' }}
        onClick={handleRegister}
      >
        Register
      </Button>
      <Button sx={{ mt: 2, height: 48 }} onClick={toggleAuth}>
        Log In
      </Button>
    </FormControl>
  );
}
