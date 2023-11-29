/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LikeBtn from './LikeBtn';

const BoardItem = ({
  data,
  linkPath,
  showLikeBtn = true,
  showAddress = true,
}) => {
  return (
    <div css={item}>
      <div css={poster}>
        <Link to={linkPath}>
          <img src={data.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={linkPath}>{data.title || data.galleryName}</Link>
        {showLikeBtn && <LikeBtn />}
      </div>
      {data.area && (
        <div css={location}>
          {data.galleryName}/ {data.area}
        </div>
      )}
      {showAddress && data.address && <div css={title_sub}>{data.address}</div>}
      {data.startDate && data.endDate && (
        <div css={period}>
          {data.startDate} ~ {data.endDate}
        </div>
      )}
    </div>
  );
};

export default BoardItem;

const item = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  margin-bottom: 20px;
  border
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
  height: 38px;
  font-size: 20px;
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

const location = css`
  font-size: 15px;
`;

const title_sub = css`
  font-size: 14px;
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;
