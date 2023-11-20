/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#c3fd1e' : undefined,
  };
}

const Navbar = () => {
  return (
    <div css={nav_wrap}>
      <div css={nav_contents}>
        <section css={nav_logo}>
          <Link to='/'>
            Arth<span>!</span>ve
          </Link>
        </section>
        <section css={nav_boards}>
          <NavLink to='exhibition' style={getLinkStyle}>
            EXHIBITION
          </NavLink>
          <NavLink to='gallery' style={getLinkStyle}>
            GALLERY
          </NavLink>
          <NavLink to='about' style={getLinkStyle}>
            ABOUT
          </NavLink>
        </section>
        <section css={nav_links}>
          <Link to='my-page'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/mypage.png`}
              alt='마이페이지'
            />
          </Link>
          <Link to='my-likes'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/like-heart.png`}
              alt='찜목록'
            />
          </Link>
          <Link to='search'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/search-btn.png`}
              alt='검색페이지'
            />
          </Link>
        </section>
        <section css={nav_user}>
          <Link to='/login'>로그인</Link>
          <Link to='/sign-up'>회원가입</Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;

const nav_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: black;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

const nav_contents = css`
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const nav_logo = css`
  display: block;
  font-size: 28px;
  font-weight: 600;

  span {
    color: #c3fd1e;
  }
`;

const nav_boards = css`
  width: 800px;
  min-width: 380px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  font-weight: 500;

  a {
    margin-left: 40px;
  }
`;

const nav_links = css`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;

  img {
    width: 34px;
    padding: 5px 5px 5px 5px;
    margin-top: 5px;
  }
`;

const nav_user = css`
  display: flex;
  justify-content: flex-end;
  min-width: 140px;
  a {
    margin-left: 15px;
  }
`;
