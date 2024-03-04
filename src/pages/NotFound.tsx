/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div css={not_found}>
      <h1>존재하지 않는 페이지입니다.</h1>
      <p>올바른 주소가 맞는지 다시 한 번 확인해 주세요.</p>
      <div css={map_home}>
        <Link to='/'>홈으로 가기</Link>
      </div>
    </div>
  );
};

export default NotFound;

const not_found = css`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 10px 0px;
  }
`;

const map_home = css`
  background-color: #c3fd1e;
  border-radius: 20px;
  width: 90px;
  height: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: black;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
  }
`;
