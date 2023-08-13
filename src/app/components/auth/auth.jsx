'use client';
import { useState } from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import Social from './social/social';
import Login from './login/login';
import Register from './register/register';

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const toggleAuth = () => {
    setLogin(!login);
    console.log(login);
  };

  const handleLogin = () => {
    console.log('login');
  };

  const handleRegister = () => {
    console.log('Register');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography>{login ? 'Log In' : 'Register'}</Typography>
        <Divider />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        {login ? (
          <Login
            toggleAuth={toggleAuth}
            handleLogin={handleLogin}
            showPassword={showPassword}
            handleClick={handleClickShowPassword}
          />
        ) : (
          <Register
            toggleAuth={toggleAuth}
            handleRegister={handleRegister}
            showPassword={showPassword}
            handleClick={handleClickShowPassword}
          />
        )}

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 2, display: { xs: 'none', sm: 'flex' } }}
        >
          <Chip label="or" variant="outlined" />
        </Divider>
        <Social />
      </Box>
    </Box>
  );
}
