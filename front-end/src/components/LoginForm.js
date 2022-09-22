import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { requestLogin, requestData, setToken } from '../services/requests';

export default function LoginForm() {
  const initialValue = {
    email: '',
    password: '',
  };

  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    values[event.target.name] = event.target.value;
    setValues(values);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    try {
      const { token } = await requestLogin('/login', { email, password });
      setToken(token);
      const { name, role } = await requestData('/login', { email, password });

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  // if (isLogged) return <Navigate to="/products" />;
  // comentei pois ainda não criei essa página

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
            onChange={ handleChange }
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
            onChange={ handleChange }
            required
          />
        </label>
        {
          (failedTryLogin)
            ? (
              <p data-testid="common_login__element-invalid-email">
                { message }
              </p>
            )
            : null
        }
        <button
          data-testid="common_login__button-login"
          type="submit"
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
