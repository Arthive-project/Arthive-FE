import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <RecoilRoot>
    <Main />
  </RecoilRoot>
);
