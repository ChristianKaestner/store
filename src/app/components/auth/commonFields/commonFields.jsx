import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function CommonFileds({
  showPassword,
  handleClick,
  regPass,
  regEmail,
  errors,
}) {
  return (
    <>
      <TextField
        required
        label="Email"
        id="email"
        type="email"
        {...regEmail}
        sx={{
          mt: 2,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: errors?.email ? 'primary.hot' : 'rgba(0, 0, 0, 0.23)',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: errors?.email ? 'primary.hot' : 'primary.light',
            },
          },
        }}
      />
      {errors?.email && (
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
          Invalid email address
        </Typography>
      )}
      <TextField
        required
        id="password"
        {...regPass}
        type={showPassword ? 'text' : 'password'}
        label="Password"
        autoComplete="true"
        sx={{
          mt: 2,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: errors?.password
              ? 'primary.hot'
              : 'rgba(0, 0, 0, 0.23)',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: errors?.password ? 'primary.hot' : 'primary.light',
            },
          },
        }}
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
