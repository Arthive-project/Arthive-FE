/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminHeader from './AdminHeader';

const App = () => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? (
        <>
          <AdminHeader />
          <Outlet />
        </>
      ) : (
        <>
          <div css={wrapper}>
            <Navbar />
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

const wrapper = css`
  height: auto;
  min-height: calc(100vh - 230px);
`;
