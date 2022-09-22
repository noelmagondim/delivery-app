import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidButton, setValidButton] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

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
    }

    navigate('/customer/products');
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await requestLogin('/users/login', { emailInput, passwordInput });

    if (response.status >= Number('400')) {
      setMessage(response.data.message);
      setFailedTryLogin(true);
    }

    const { data: { token, name, email, role } } = response;

    setToken(token);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
    localStorage.setItem('token', token);

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
    <div>
      <form>
        <label htmlFor="input-email">
          Login
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            id="input-email"
            placeholder="email@trybeer.com.br"
            onChange={ onChangeEmail }
            required
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            id="input-password"
            onChange={ onChangePassword }
            required
          />
        </label>
        {
          failedTryLogin
            ? (
              <p data-testid="common_login__element-invalid-email">
                {message}
              </p>
            )
            : null
        }
        <button
          data-testid="common_login__button-login"
          type="submit"
          onClick={ handleLogin }
          disabled={ !isValidButton }
        >
          LOGIN
        </button>
      </form>
      <Link to="/register">
        <button
          data-testid="common_login__button-register"
          type="submit"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}
