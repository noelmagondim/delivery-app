import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get.apply(endpoint);

  return data;
};

export const requestLogin = async (endpoint, body) => {
  const request = { email: body.emailInput, password: body.passwordInput };

  const response = await api.post(endpoint, request)
    .catch((error) => error.response);

  return response;
};

export const requestRegister = async (endpoint, body) => {
  const request = {
    name: body.nameInput,
    email: body.emailInput,
    password: body.passwordInput,
    role: 'customer',
  };

  const response = await api.post(endpoint, request)
    .catch((error) => error.response);

  return response;
};

export const requestCustomerOrders = async (id) => {
  const URL = `/sales/user/${id}`;

  const response = await api.get(URL)
    .catch((error) => error.response);

  return response;
};

export default api;
