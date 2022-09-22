import React, { useState } from 'react';

export default function LoginForm() {
  const initialValue = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    values[event.target.name] = event.target.value;
    setValues(values);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

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
        <button
          data-testid="common_login__button-login"
          type="submit"
        >
          LOGIN
        </button>
      </form>
      <button
        data-testid="common_login__button-register"
        type="submit"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}
