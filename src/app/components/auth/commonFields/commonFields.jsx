import { InputAdornment, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputProps } from '@/app/utils/commonStyles';

export default function CommonFileds({
  showPassword,
  handleClick,
  regPass,
  regEmail,
  errors,
}) {
  return (
    <>
      <InputProps
        err={errors?.email}
        required
        label="Email"
        id="email"
        type="email"
        {...regEmail}
        sx={{ mt: 2 }}
      />
      {errors?.email && (
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Invalid email address
        </Typography>
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
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Password must be at least 6 characters and contain at least one letter
          and one digit
        </Typography>
      )}
    </>
  );
}
