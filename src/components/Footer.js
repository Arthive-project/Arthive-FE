/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Footer = () => {
  return (
    <div css={footer_wrap}>
      <div css={footer_container}>
        <div css={footer_sec}>
          <p>상호명 : 아타이브</p>
          <p>대표 : 김대표</p>
          <p>대표번호 : 010-1212-3434</p>
        </div>
        <div css={footer_sec}>
          <p>주소 : 서울특별시 마포구 동교로 111-222</p>
          <p>사업자등록번호 : 000-11-77777</p>
          <p>팩스번호 : 02-232-9817</p>
        </div>
        <div css={footer_sec}>
          <p>호스팅 제공자 : AWS</p>
          <p>통신판매업신고번호 : 2023-062677</p>
          <p>메일 : arthive2023@arthive.com</p>
        </div>
        <div css={footer_sec}>
          <a href='https://github.com/Arthive-project'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/github.png`}
              alt='깃헙'
            />
          </a>

          <a href='https://github.com/Arthive-project'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/twitter.png`}
              alt='트위터'
            />
          </a>
          <a href='https://github.com/Arthive-project'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/instagram.png`}
              alt='인스타그램'
            />
          </a>
          <a href='https://github.com/Arthive-project'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/mail.png`}
              alt='메일'
            />
          </a>
          <p>개인정보 관리자: 김정보</p>
        </div>
      </div>

      <hr></hr>

      <div css={footer_copyright}>
        <p>@{new Date().getFullYear()} Arthive. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

const footer_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 230px;
  background-color: black;
  color: white;
  font-size: 14px;

  position: relative;
  // transform: translateY(-100%);

  hr {
    width: 50%;
    border: 0.5px solid white;
  }
`;

const footer_container = css`
  display: flex;
  justify-content: space-between;
  width: 1160px;
  height: 180px;
  padding-left: 50px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const footer_sec = css`
  width: 240px;

  img {
    width: 22px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    line-height: 25px;
  }
`;

const footer_copyright = css`
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
