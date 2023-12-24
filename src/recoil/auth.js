import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom({
  key: 'isLoggedIn',
  default: localStorage.getItem('refreshToken') ? true : false,
});
