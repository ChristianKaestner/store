import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, InputAdornment } from '@mui/material';
import { Button, Typography } from '@mui/material';
import CommonFileds from '../commonFields/commonFields';
import { InputProps } from '../../../lib/commonStyles';
import OnError from '../../Notifications/onError';

export default function Register({
  toggleAuth,
  handleRegister,
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
    }
  }, [httpError, setError]);

  const handleClearError = () => {
    if (httpError?.status) {
      clearErrors('email');
    }
  };

  return (
    <FormControl
      sx={{ display: 'flex', mt: 2, width: { xs: '100%', sm: '60%' } }}
      component="form"
      onSubmit={handleSubmit(data => handleRegister(data))}
      onChange={handleClearError}
    >
      <InputProps
        err={errors?.firstName}
        required
        label="First Name"
        id="firstName"
        type="text"
        {...register('firstName', {
          required: 'required',
          minLength: 2,
        })}
      />
      {errors.firstName && (
        <OnError text="Name must be at least 2 characters" />
      )}

      <InputProps
        err={errors?.lastName}
        required
        label="Last Name"
        id="lastName"
        type="text"
        sx={{ mt: 2 }}
        {...register('lastName', {
          required: 'required',
          minLength: 2,
        })}
      />
      {errors.lastName && (
        <OnError text="Last name must be at least 2 characters" />
      )}

      <InputProps
        err={errors?.phone}
        required
        id="phone"
        type="number"
        {...register('phone', {
          required: 'required',
          minLength: 9,
          maxLength: 9,
        })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography sx={{ color: 'primary.dim' }}>+380</Typography>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2 }}
      />
      {errors.phone && <OnError text="Phone number must be 9 digits" />}

      <CommonFileds
        showPassword={showPassword}
        handleClick={handleClick}
        regEmail={register('email', {
          required: 'required',
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/,
        })}
        regPass={register('password', {
          required: 'required',
          minLength: 6,
          pattern: /^(?=.*[a-zA-Z])(?=.*\d).+/,
        })}
        errors={errors}
        clearError={handleClearError}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 48, mt: 2, bgcolor: 'primary.light' }}
      >
        Register
      </Button>
      <Button sx={{ height: 48, mt: 2 }} onClick={toggleAuth}>
        Log In
      </Button>
    </FormControl>
  );
}
