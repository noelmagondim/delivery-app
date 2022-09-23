import React, { useState, useEffect } from 'react';
import { requestRegister } from '../services/requests';

export default function LoginForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidButton, setValidButton] = useState(false);
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [message, setMessage] = useState('');

  const validateEmail = (emaill) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emaill);
  };

  const onChangeName = ({ target }) => {
    setNameInput(target.value);
  };

  const onChangeEmail = ({ target }) => {
    setEmailInput(target.value);
  };

  const onChangePassword = ({ target }) => {
    setPasswordInput(target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const response = await requestRegister(
      '/users/register',
      { nameInput, emailInput, passwordInput, role: 'customer' },
    );

    if (response.status >= Number('400')) {
      setMessage(response.data.message);
      setFailedTryRegister(true);
    }
  };

  useEffect(() => {
    if (validateEmail(emailInput)
     && passwordInput.length >= Number('6')
      && nameInput.length >= Number('12')) {
      setValidButton(true);
    } else {
      setValidButton(false);
    }
  }, [nameInput, emailInput, passwordInput]);

  return (
    <div>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="name"
            name="name"
            id="input-name"
            placeholder="Seu nome"
            onChange={ onChangeName }
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
            onChange={ onChangeEmail }
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
            onChange={ onChangePassword }
            required
          />
        </label>
        {
          failedTryRegister
            ? (
              <p data-testid="common_register__element-invalid_register">
                {message}
              </p>
            )
            : null
        }
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !isValidButton }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
