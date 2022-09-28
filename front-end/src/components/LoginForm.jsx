import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Stack,
  Button,
  Alert,
  Divider,
} from '@mui/material';
import { requestLogin, setToken } from '../services/requests';

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidButton, setValidButton] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) return navigate('/customer/products');
  }, []);

  const validateEmail = (emaill) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emaill);
  };

  const onChangeEmail = ({ target }) => {
    setEmailInput(target.value);
  };

  const onChangePassword = ({ target }) => {
    setPasswordInput(target.value);
  };

  const handleNavigate = (role) => {
    if (role === 'administrator') {
      navigate('/admin/manage');
      return;
    }

    if (role === 'seller') {
      navigate('/seller/orders');
      return;
    }

    navigate('/customer/products');
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await requestLogin('/users/login', { emailInput, passwordInput });

    if (response.status >= Number('400')) {
      setMessage(response.data.message);
      setFailedTryLogin(true);
      return;
    }

    const { data: { token, name, email, role, id } } = response;

    setToken(token);

    localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));

    return role && handleNavigate(role);
  };

  useEffect(() => {
    if (validateEmail(emailInput) && passwordInput.length >= Number('6')) {
      setValidButton(true);
    } else {
      setValidButton(false);
    }
  }, [emailInput, passwordInput]);

  return (
    <Box
      bgcolor="#fff"
      sx={ {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 2,
        padding: 4,
        width: '100%',
      } }
    >
      <Stack
        width="80%"
        spacing={ 2 }
      >
        <TextField
          label="Email"
          data-testid="common_login__input-email"
          type="email"
          name="email"
          id="input-email"
          placeholder="email@trybeer.com.br"
          onChange={ onChangeEmail }
          required
        />
        <TextField
          label="Senha"
          data-testid="common_login__input-password"
          type="password"
          name="password"
          id="input-password"
          onChange={ onChangePassword }
          required
        />
      </Stack>
      <Stack
        display="flex"
        spacing={ 2 }
        sx={ {
          marginTop: '20px' } }
      >
        {
          failedTryLogin
            ? (
              <Alert
                severity="error"
                data-testid="common_login__element-invalid-email"
              >
                {message}
              </Alert>
            )
            : null
        }
        <Button
          variant="contained"
          data-testid="common_login__button-login"
          type="submit"
          onClick={ handleLogin }
          disabled={ !isValidButton }
        >
          LOGIN
        </Button>
        <Divider />
        <Link to="/register">
          <span
            data-testid="common_login__button-register"
            type="submit"
          >
            Ainda não tenho conta
          </span>
        </Link>
      </Stack>
    </Box>
  );
}
