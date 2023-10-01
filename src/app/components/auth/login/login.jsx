import { useForm } from 'react-hook-form';
import { FormControl, Button } from '@mui/material';
import CommonFileds from '../commonFields/commonFields';

export default function Login({
  toggleAuth,
  handleLogin,
  showPassword,
  handleClick,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });
  return (
    <FormControl
      sx={{ display: 'flex', mt: 2, width: { xs: '100%', sm: '60%' } }}
      component="form"
      onSubmit={handleSubmit(data => handleLogin(data))}
    >
      <CommonFileds
        showPassword={showPassword}
        handleClick={handleClick}
        regEmail={register('email')}
        regPass={register('password')}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, height: 48, bgcolor: 'primary.light' }}
      >
        Log In
      </Button>
      <Button sx={{ mt: 2, height: 48 }} onClick={toggleAuth}>
        Register
      </Button>
    </FormControl>
  );
}
