import axios from '../lib/axios';

export const requestLogin = async (email, password) => {
  const result = await axios.post('/auth/login', {
    email,
    password,
  });

  return result.data.data;
};

export const getNewRefreshToken = async () => {
  const refreshToken = localStorage.getItem('refresh');
  const result = await axios.post('/token/refresh', {
    refreshToken,
  });

  return result.data;
};

export const requestLogout = async () => {
  const result = await axios.post('/auth/logout');
  if (result.status === 201) return true;
  else return false;
};
