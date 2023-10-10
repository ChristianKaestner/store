import { useForm, Controller } from 'react-hook-form';
import { FormControl, InputAdornment } from '@mui/material';
import { Button, Typography } from '@mui/material';
import { InputProps } from '@/app/lib/commonStyles';
import OnError from '../../Notifications/onError';

export default function EditInfoModal({ user, handleEdit }) {
  const { firstName, lastName, phone, email } = user;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  return (
    <FormControl
      sx={{ display: 'flex', mt: 2 }}
      component="form"
      onSubmit={handleSubmit(data => handleEdit(data))}
    >
      <Controller
        control={control}
        name="firstName"
        defaultValue={firstName}
        rules={{ required: true, minLength: 2 }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.firstName}
              id="firstName"
              type="text"
              required
              label="First Name"
              value={value}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.firstName && (
        <OnError text="Name must be at least 2 characters" />
      )}

      <Controller
        control={control}
        name="lastName"
        defaultValue={lastName}
        rules={{ required: true, minLength: 2 }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.lastName}
              id="lastName"
              type="text"
              required
              label="Last Name"
              value={value}
              sx={{ mt: 2 }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.lastName && (
        <OnError text="Last name must be at least 2 characters" />
      )}

      <Controller
        control={control}
        name="phone"
        defaultValue={phone}
        rules={{ required: true, minLength: 9, maxLength: 9 }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.phone}
              id="phone"
              type="number"
              required
              label="Phone number"
              value={value}
              sx={{ mt: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography>+380</Typography>
                  </InputAdornment>
                ),
              }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.phone && <OnError text="Phone number must be 9 digits" />}

      <Controller
        control={control}
        name="email"
        defaultValue={email}
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/,
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.email}
              id="email"
              type="email"
              required
              label="Email"
              value={value}
              sx={{ mt: 2 }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors?.email && <OnError text="Invalid email address" />}

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, bgcolor: 'primary.light' }}
      >
        Edit
      </Button>
    </FormControl>
  );
}
