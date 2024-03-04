import axios from '../lib/axios';
import { getCookie } from '../util/cookie';

interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

interface UserInfo {
  userId: string;
  userEmail: string;
}

interface DecodedToken {
  header: any;
  payload: UserInfo;
  signature: string;
}

export const requestLogin = async (
  email: string,
  password: string
): Promise<LoginResponse | null> => {
  try {
    const result = await axios.post<LoginResponse>('/auth/login', {
      email,
      password,
    });

    if (result.status === 201) {
      getUserInfo();
      return result.data;
    } else {
      return null;
    }
  } catch (error: any) {
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

export const getNewRefreshToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem('refresh');
  if (!refreshToken) return null;

  const result = await axios.post<{ data: string }>('/token/refresh', {
    refreshToken,
  });

  return result.data.data;
};

export const requestLogout = async (): Promise<boolean> => {
  try {
    const accessToken = getCookie('accessToken');
    if (!accessToken) return false;

    const result = await axios.post(
      '/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return result.status === 201;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    return false;
  }
};

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));

    return {
      header: decodedHeader,
      payload: decodedPayload,
      signature,
    };
  } catch (error) {
    console.error('토큰 디코딩 오류:', error);
    return null;
  }
};

export const getUserInfo = async (): Promise<string | null> => {
  const token = await getCookie('accessToken');
  if (!token) return null;

  const decodedToken = decodeToken(token);
  if (!decodedToken) return null;

  const { payload } = decodedToken;
  const { userId, userEmail } = payload;
  console.log('사용자 ID:', userId);
  console.log('사용자 userEmail:', userEmail);

  return userEmail;
};

export const getUserInfoById = async (
  userId: string
): Promise<UserInfo | null> => {
  try {
    const result = await axios.get<{ data: UserInfo }>(`/user/${userId}`);
    return result.data.data;
  } catch (error) {
    alert('유저 정보를 가져오는데 실패했습니다.');
    return null;
  }
};

export const updateUserInfoById = async (
  userId: string,
  info: Partial<UserInfo>
): Promise<UserInfo | null> => {
  try {
    const result = await axios.patch<{ data: UserInfo }>(
      `/user/${userId}`,
      info
    );
    return result.data.data;
  } catch (error) {
    alert('유저 정보를 수정하는데 실패했습니다.');
    console.error(error);
    return null;
  }
};
