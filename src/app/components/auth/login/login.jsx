import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, Button } from '@mui/material';
import CommonFileds from '../commonFields/commonFields';

export default function Login({
  toggleAuth,
  handleLogin,
  showPassword,
  handleClick,
  httpError,
}) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (httpError?.status) {
      setError('email', { type: 'manual', message: httpError.message });
      setError('password', { type: 'manual', message: httpError.message });
    }
  }, [httpError]);

  const handleClearError = () => {
    if (httpError?.status) {
      clearErrors('email');
      clearErrors('password');
    }
  };

  return (
    <FormControl
      sx={{ display: 'flex', mt: 2, width: { xs: '100%', sm: '60%' } }}
      component="form"
      onSubmit={handleSubmit(data => handleLogin(data))}
      onChange={handleClearError}
    >
      <CommonFileds
        showPassword={showPassword}
        handleClick={handleClick}
        regEmail={register('email')}
        regPass={register('password')}
        errors={errors}
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
