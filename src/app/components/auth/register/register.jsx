import { useForm } from 'react-hook-form';
import { FormControl, TextField, InputAdornment } from '@mui/material';
import { Button, Typography } from '@mui/material';
import CommonFileds from '../commonFields/commonFields';
import { InputProps } from '@/app/utils/commonStyles';

export default function Register({
  toggleAuth,
  handleRegister,
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
      onSubmit={handleSubmit(data => handleRegister(data))}
    >
      <InputProps
        err={errors?.firstname}
        required
        label="First Name"
        id="firstname"
        type="text"
        {...register('firstname', {
          required: 'required',
          minLength: 2,
        })}
      />
      {errors.firstname && (
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Name must be at least 2 characters
        </Typography>
      )}

      <InputProps
        err={errors?.lastname}
        required
        label="Last Name"
        id="lastname"
        type="text"
        sx={{ mt: 2 }}
        {...register('lastname', {
          required: 'required',
          minLength: 2,
        })}
      />
      {errors.lastname && (
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Last name must be at least 2 characters
        </Typography>
      )}

      <InputProps
        err={errors?.phone}
        required
        id="phone"
        type="number"
        {...register('phone', {
          required: 'required',
          minLength: 9,
        })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography>+380</Typography>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2 }}
      />
      {errors.phone && (
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Phone number must be 9 digits
        </Typography>
      )}

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
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, bgcolor: 'primary.light' }}
      >
        Register
      </Button>
      <Button sx={{ mt: 2 }} onClick={toggleAuth}>
        Log In
      </Button>
    </FormControl>
  );
}
