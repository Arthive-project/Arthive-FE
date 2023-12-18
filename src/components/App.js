/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';

const App = () => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? (
        <>
          <AdminHeader />
          <div css={admin_wrap}>
            <AdminNavbar />
            <div css={admin_outlet_wrap}>
              <div css={admin_outlet}>
                <Outlet />
              </div>
            </div>
          </div>
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

const admin_wrap = css`
  display: flex;
  width: 100vw;
  height: 90vh;
`;

const admin_outlet_wrap = css`
  // border: 1px solid red;
  width: 100%;
  background-color: #f2f5e8;
  padding: 2rem;
`;

const admin_outlet = css`
  border: 1px solid black;
  width: 100%;
  min-height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: $box-shadow-deep;
  padding: 2rem;
  box-sizing: border-box;
`;

const wrapper = css`
  height: auto;
  min-height: calc(100vh - 230px);
`;
