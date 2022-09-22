import React, { useState } from 'react';

export default function LoginForm() {
  const initialValue = {
    name: '',
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
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="name"
            name="name"
            id="input-name"
            placeholder="Seu nome"
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            name="email"
            id="input-email"
            placeholder="seu-email@site.com.br"
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            name="password"
            id="input-password"
            onChange={ handleChange }
            required
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
