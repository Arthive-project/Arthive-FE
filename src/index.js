import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Main />
  </RecoilRoot>
);
