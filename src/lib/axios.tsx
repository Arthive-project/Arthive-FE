import axios from 'axios';
import { Cookies } from 'react-cookie';

const instance = axios.create({
  baseURL: 'http://3.37.108.23:8000/api/v1',
  withCredentials: true,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    const token = cookies.get('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = cookies.get('refresh_token');
      // Refresh Token을 사용하여 새 Access Token 요청
      return axios
        .post('http://3.37.108.23:8000/api/v1/refresh_token', { refreshToken })
        .then((res) => {
          if (res.status === 200) {
            // 새 Access Token과 Refresh Token 저장
            cookies.set('access_token', res.data.access_token, {
              path: '/',
              expires: new Date(Date.now() + 3600 * 1000),
            });
            cookies.set('refresh_token', res.data.refresh_token, {
              path: '/',
              expires: new Date(Date.now() + 86400 * 1000 * 7),
            });
            // 원래 요청에 새 토큰 적용
            api.defaults.headers.common['Authorization'] =
              `Bearer ${res.data.access_token}`;
            return api(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default instance;
