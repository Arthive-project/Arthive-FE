import axios from '../lib/axios';
import { getCookie } from '../util/cookie';

export const requestLogin = async (email, password) => {
  try {
    const result = await axios.post('/auth/login', {
      email,
      password,
    });

    if (result.status === 201) {
      getUserInfo();
      return result.data.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(
        '이메일 혹은 비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.'
      );
    } else {
      alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }

    return null;
  }
};

export const getNewRefreshToken = async () => {
  const refreshToken = localStorage.getItem('refresh');
  const result = await axios.post('/token/refresh', {
    refreshToken,
  });

  return result.data.data;
};

export const requestLogout = async () => {
  try {
    const accessToken = getCookie('accessToken');
    const result = await axios.post('/auth/logout', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (result.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('로그아웃 실패:', error);
    return false;
  }
};

export const decodeToken = (token) => {
  try {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));

    return {
      header: decodedHeader,
      payload: decodedPayload,
      signature: signature,
    };
  } catch (error) {
    console.error('토큰 디코딩 오류:', error);
    return null;
  }
};

export const getUserInfo = async () => {
  const token = await getCookie('accessToken');

  if (token) {
    const decodedToken = decodeToken(token);

    if (decodedToken) {
      const { payload } = decodedToken;
      const { userId, userEmail } = payload;
      console.log('사용자 ID:', userId);
      console.log('사용자 userEmail:', userEmail);

      return userEmail;
    }
  }
  return null;
};

export const getUserInfoById = async (userId) => {
  try {
    const result = await axios.get(`/user/${userId}`);
    if (result.status === 200) {
      return result.data.data;
    }
  } catch (error) {
    alert('유저 정보를 가져오는데 실패했습니다.');
    return null;
  }
};

export const updateUserInfoById = async (userId, info) => {
  try {
    const result = await axios.patch(`/user/${userId}`, info);
    if (result.status === 200) {
      return result.data.data;
    }
  } catch (error) {
    alert('유저 정보를 수정하는데 실패했습니다.');
    console.log(error);
    return null;
  }
};
