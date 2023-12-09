'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAccount, toggleSuccess } from '../../redux/modal/slice';
import { register, logIn, resendCode } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Social from './social/social';
import Login from './login/login';
import Register from './register/register';
import { AuthContainer, SocialContainer, ButtonStyled } from './auth.styled';
import { DividerStyled, ChipStyled } from './auth.styled';

export default function Auth({ toggleAuth, login, closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [counter, setCounter] = useState(59);

  const { error, isLogin, isLoading, isVCodeSent, user } = useAuth();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = data => {
    dispatch(logIn(data));
  };

  const handleRegister = data => {
    dispatch(register(data));
    closeModal();
    dispatch(toggleSuccess(true));
    setDisabled(false);
  };

  const handleResentCode = () => {
    dispatch(resendCode(user.email));
    setDisabled(true);
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(toggleAccount(false));
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    if (!isVCodeSent) return;
    let interval;

    if (disabled) {
      interval = setInterval(() => {
        setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
        setCounter(prevCounter => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            setDisabled(false);
            return 59;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [disabled]);

  return (
    <AuthContainer>
      {login ? (
        <Login
          toggleAuth={toggleAuth}
          handleLogin={handleLogin}
          showPassword={showPassword}
          handleClick={handleClickShowPassword}
          httpError={error}
        />
      ) : (
        <Register
          toggleAuth={toggleAuth}
          handleRegister={handleRegister}
          showPassword={showPassword}
          handleClick={handleClickShowPassword}
          httpError={error}
        />
      )}

      <DividerStyled orientation="vertical" flexItem>
        <ChipStyled label="or" variant="outlined" />
      </DividerStyled>
      <SocialContainer>
        <Social />
        {isVCodeSent && !isLoading && (
          <ButtonStyled
            variant="outlined"
            onClick={handleResentCode}
            disabled={disabled}
          >
            resend code
            {disabled && (
              <ChipStyled label={counter} variant="outlined" sx={{ ml: 1 }} />
            )}
          </ButtonStyled>
        )}
      </SocialContainer>
    </AuthContainer>
  );
}
