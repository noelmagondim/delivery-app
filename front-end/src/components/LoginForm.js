import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidButton, setValidButton] = useState(false);

  const validateEmail = (emaill) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emaill);
  };

  const onChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const onChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    if (validateEmail(email) && password.length > Number('6')) {
      setValidButton(true);
    } else {
      setValidButton(false);
    }
  }, [email, password]);

  return (
    <div>
      <form onSubmit={ handleFormSubmit }>
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
        <button
          data-testid="common_login__button-login"
          type="submit"
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
