/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';

const App = () => {
  const isAdmin = false;

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
  height: 93vh;
`;

const admin_outlet_wrap = css`
  width: 100%;
  background-color: #f2f5e8;
  padding: 2rem;
`;

const admin_outlet = css`
  border: 1px solid black;
  min-height: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
  overflow: scroll;
`;

const wrapper = css`
  height: auto;
  min-height: calc(100vh - 230px);
`;
