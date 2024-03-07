/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';
import { requestLogout } from '../api/userAPI';
import { removeCookie } from '../util/cookie';
import { useSetRecoilState } from 'recoil';
import { TokenAtom } from '../recoil/TokenAtom';
import { isAdminState } from '../recoil/auth';

const AdminHeader = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(TokenAtom);
  const setAdmin = useSetRecoilState(isAdminState);

  const handleLogout = async () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      try {
        await requestLogout();
        setAdmin(false);
        removeCookie('accessToken');
        removeCookie('refreshToken');
        setAccessToken(undefined);
        alert('로그아웃이 완료 되었습니다.');
        navigate('/');
      } catch {
        alert('로그아웃에 실패하였습니다.');
      }
    }
  };
  return (
    <header css={admin_header}>
      <Link to='/admin'>
        <h1 css={nav_logo}>
          Arth<span>!</span>ve
        </h1>
        <p>어드민 페이지</p>
      </Link>
      <button onClick={handleLogout}>
        <MdOutlineLogout size='30' title='logout' color='white' />
      </button>
    </header>
  );
};

export default AdminHeader;

const admin_header = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    display: inline;
  }

  p {
    display: inline;
    font-size: 22px;
    font-weight: 500;
    margin-left: 10px;
  }

  button {
    margin-right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const nav_logo = css`
  font-size: 30px;
  font-weight: 600;
  height: 55px;
  padding-left: 20px;

  a {
    vertical-align: middle;
  }

  span {
    color: #c3fd1e;
  }
`;
