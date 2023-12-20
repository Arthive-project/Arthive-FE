/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdminNavItem from './AdminNavItem';

const AdminNavbar = () => {
  return (
    <nav css={navbar}>
      <ul>
        <AdminNavItem page={'/admin'} title={'대시 보드'} />
        <AdminNavItem page={'/admin/posts'} title={'게시물 관리'} />
        <AdminNavItem page={'/admin/application'} title={'등록 신청 내역'} />
      </ul>
    </nav>
  );
};

export default AdminNavbar;

const navbar = css`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 2rem;
  box-sizing: border-box;
  border-right: 1px solid $color-gray;
  background-color: $color-white;
  z-index: 200;

  ul {
    width: 100%;
  }

  li {
    font-size: 16px;
    border-bottom: 1px solid gray;
  }

  a {
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`;
