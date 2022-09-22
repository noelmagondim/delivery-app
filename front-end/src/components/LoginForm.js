import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="input-email">
        Login
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          id="input-email"
          placeholder="email@trybeer.com.br"
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
          required
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="submit"
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="submit"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}
