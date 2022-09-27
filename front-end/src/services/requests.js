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

export const requestProducts = async () => {
  const url = '/customer/products';

  const { data } = await api.get(url).catch((error) => error.response);

  return data;
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

export const requestSaleChangeStatus = async (saleId, body) => {
  const url = `/sales/status/${saleId}`;

  const requestBody = { status: body };

  await api.patch(url, requestBody).catch((error) => error.response);
};

export const requestOrderDetails = async (orderId) => {
  const url = `/sales/${orderId}`;

  const response = await api.get(url).catch((error) => error.response);

  return response;
};

export const requestCustomerOrders = async (id) => {
  const URL = `/sales/user/${id}`;

  const response = await api.get(URL).catch((error) => error.response);

  return response;
};

export const requestSellerOrders = async (id) => {
  const URL = `/sales/seller/${id}`;

  const response = await api.get(URL).catch((error) => error.response);

  return response;
};

export default api;
