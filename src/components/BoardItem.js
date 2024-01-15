/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LikeBtn from './LikeBtn';

const BoardItem = ({ data, linkPath, showLikeBtn = true }) => {
  return (
    <div css={item}>
      <div css={poster}>
        <Link to={linkPath}>
          <img src={data.MAIN_IMG} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={linkPath}>{data.TITLE}</Link>
        {showLikeBtn && <LikeBtn />}
      </div>
      <div css={period}>
        {/* {data.STRTDATE} ~ {data.END_DATE} */}
        {data.DATE}
      </div>
    </div>
  );
};

export default BoardItem;

const item = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  max-height: 1000px;
  margin-bottom: 20px;
`;

const poster = css`
  margin-bottom: 5px;

  img {
    width: 250px;
    height: 100%;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
`;

const title = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  font-size: 19px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: black;
  }

  span {
    text-align: right;
  }

  img {
    width: 22px;
    cursor: pointer;
  }
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;
