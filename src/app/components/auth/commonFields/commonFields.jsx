import { InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputProps } from '../../../lib/commonStyles';
import OnError from '../../Notifications/onError';

export default function CommonFileds({
  showPassword,
  handleClick,
  regPass,
  regEmail,
  errors,
  clearError,
}) {
  return (
    <>
      <InputProps
        onChange={clearError}
        err={errors?.email}
        required
        label="Email"
        id="email"
        type="email"
        autoComplete="off"
        {...regEmail}
        sx={{ mt: 2 }}
      />
      {errors?.email && (
        <OnError
          text={
            errors?.email?.message
              ? errors.email.message
              : 'Invalid email address'
          }
        />
      )}
      <InputProps
        err={errors?.password}
        required
        id="password"
        {...regPass}
        type={showPassword ? 'text' : 'password'}
        label="Password"
        autoComplete="true"
        sx={{ mt: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {errors?.password && (
        <OnError
          text={
            errors?.password?.message
              ? errors.password.message
              : 'Password must be at least 6 characters and contain at least one letter and one digit'
          }
        />
      )}
    </>
  );
}
