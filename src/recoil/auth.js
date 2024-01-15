import { atom } from 'recoil';
import { getCookie } from '../util/cookie';

export const userState = atom({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom({
  key: 'isLoggedIn',
  default: getCookie('refreshToken') ? true : false,
});

export const isAdminState = atom({
  key: 'isAdmin',
  default: false,
});
