import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.37.108.23:8000/api/v1',
  withCredentials: true,
});

// instance.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       await instance.post('/token/refresh', undefined, { _retry: true });
//       originalRequest._retry = true;
//       return instance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
