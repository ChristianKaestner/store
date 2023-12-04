import { useForm, Controller } from 'react-hook-form';
import { FormControl, Button } from '@mui/material';
import { InputProps } from '@/app/lib/commonStyles';
import OnError from '../../Notifications/onError';

export default function EditAddressModal({ address, handleEdit }) {
  const { city, street, house, apartment } = address;

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
        name="city"
        defaultValue={city}
        rules={{ required: true, minLength: 2 }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.city}
              id="city"
              type="text"
              required
              label="City"
              value={value || ''}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.city && <OnError text="City must be at least 2 characters" />}

      <Controller
        control={control}
        name="street"
        defaultValue={street}
        rules={{ required: true, minLength: 2 }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.street}
              id="street"
              type="text"
              required
              label="Street"
              value={value || ''}
              sx={{ mt: 2 }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.street && <OnError text="Street must be at least 2 characters" />}

      <Controller
        control={control}
        name="house"
        defaultValue={house}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              err={errors?.house}
              id="house"
              type="text"
              required
              label="House"
              value={value || ''}
              sx={{ mt: 2 }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />
      {errors.house && <OnError text="Enter the house number" />}

      <Controller
        control={control}
        name="apartment"
        defaultValue={apartment}
        render={({ field: { onChange, value } }) => {
          return (
            <InputProps
              id="apartment"
              type="text"
              label="Apartment"
              value={value || ''}
              sx={{ mt: 2 }}
              onChange={e => {
                onChange(e.target.value);
              }}
            />
          );
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, height: 40, bgcolor: 'primary.light' }}
      >
        Edit
      </Button>
    </FormControl>
  );
}
