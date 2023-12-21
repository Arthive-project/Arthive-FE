/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <header css={nav_wrap}>
      <div
        css={header_sub_menu}
        onMouseEnter={() => setSubMenuVisible(true)}
        onMouseLeave={() => setSubMenuVisible(false)}
        style={{ display: isSubMenuVisible ? 'block' : 'none' }}
      ></div>
      <nav css={nav_contents}>
        <h1 css={nav_logo}>
          <Link to='/'>
            Arth<span>!</span>ve
          </Link>
        </h1>

        <div css={nav_boards}>
          <li
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
          >
            <Link to={'exhibition'}>
              <span>EXHIBITION</span>
            </Link>
            <ul
              css={sub_ul}
              style={{ display: isSubMenuVisible ? 'block' : 'none' }}
            >
              <li>
                <Link to={'exhibition'}>전시/미술</Link>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
          >
            <Link to={'concert-all'}>
              <span>CONCERT</span>
            </Link>
            <ul
              css={sub_ul}
              style={{ display: isSubMenuVisible ? 'block' : 'none' }}
            >
              <li>
                <Link to={'theater'}>연극</Link>
              </li>
              <li>
                <Link to={'musical'}>뮤지컬/오페라</Link>
              </li>
              <li>
                <Link to={'dance'}>무용</Link>
              </li>
              <li>
                <Link to={'classical'}>클래식</Link>
              </li>
              <li>
                <Link to={'concert'}>콘서트</Link>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
          >
            <Link to={'festival-all'}>
              <span>FESTIVAL</span>
            </Link>
            <ul
              css={sub_ul}
              style={{ display: isSubMenuVisible ? 'block' : 'none' }}
            >
              <li>
                <Link to={'tradition'}>전통/역사</Link>
              </li>
              <li>
                <Link to={'nature'}>자연/경관</Link>
              </li>
              <li>
                <Link to={'citizen'}>시민/화합</Link>
              </li>
              <li>
                <Link to={'culture'}>문화/예술</Link>
              </li>
              <li>
                <Link to={'other-festival'}>기타</Link>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
          >
            <span>ABOUT</span>
            <ul
              css={sub_ul}
              style={{ display: isSubMenuVisible ? 'block' : 'none' }}
            >
              <li>
                <Link to={'about'}>아타이브 소개</Link>
              </li>
              <li>
                <Link to={'application'}>공연/행사 등록신청</Link>
              </li>
            </ul>
          </li>
        </div>

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

        <span css={nav_user}>
          {/* <div id='user-loggedIn'></div> */}
          <div id='user-loggedOut'>
            <Link to='/login'>로그인</Link>
            <Link to='/sign-up'>회원가입</Link>
          </div>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;

const nav_wrap = css`
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  background-color: black;
  color: white;
  z-index: 1000000001;

  a {
    text-decoration: none;
    color: white;
  }
`;

const header_sub_menu = css`
  position: absolute;
  height: 190px;
  top: 100%;
  right: 0;
  left: 0;
  border-top: 1px solid #eee;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
`;

const sub_ul = css`
  display: block;
  position: absolute;
  top: 60px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 350;
  list-style-type: none;

  a {
    z-index: 1000000002;
    display: inline-block;
    text-decoration: none;
    padding: 6px 10px;
    margin-left: 12px;
    text-align: center;
    color: gray;
    &:hover {
      font-weight: 450;
      color: black;
    }
  }
`;

const nav_contents = css`
  position: relative;
  margin: 0 auto;
  max-width: 1140px;
  height: 100%;
  width: 100%;
  display: block;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const nav_logo = css`
  display: inline-block;
  float: left;
  font-size: 30px;
  font-weight: 600;
  height: 55px;

  a {
    vertical-align: middle;
  }

  span {
    color: #c3fd1e;
  }
`;

const nav_boards = css`
  list-style: none;
  min-width: 710px;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;

  li {
    cursor: pointer;

    span {
      display: block;
      padding: 17px 22px;
      height: 100%;
      &:hover {
        color: #c3fd1e;
      }
    }
  }
`;

const nav_links = css`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  float: right;

  img {
    width: 35px;
    padding: 5px 5px 5px 5px;
    margin-top: 5px;
  }
`;

const nav_user = css`
  display: flex;
  justify-content: flex-end;
  min-width: 170px;

  a {
    display: inline-block;
    padding: 9px 15px;
  }
`;
