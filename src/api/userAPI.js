import axios from '../lib/axios';

export const requestLogin = async (email, password) => {
  try {
    const result = await axios.post('/auth/login', {
      email,
      password,
    });

    if (result.status === 201) {
      return result.data.data;
    } else {
      throw new Error(`Unexpected status code: ${result.status}`);
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
  const result = await axios.post('/auth/logout');
  if (result.status === 201) return true;
  else return false;
};

export const decodeToken = (token) => {
  try {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));

    console.log('디코딩된 헤더:', decodedHeader);
    console.log('디코딩된 페이로드:', decodedPayload);

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

// 사용자 정보 가져오기
export const getUserInfo = async () => {
  const token = await localStorage.getItem('access');

  if (token) {
    const decodedToken = decodeToken(token);

    if (decodedToken) {
      const { payload } = decodedToken;
      const { userId, username } = payload;
      console.log('사용자 ID:', userId);
      console.log('사용자 이름:', username);
    }
  }
};
