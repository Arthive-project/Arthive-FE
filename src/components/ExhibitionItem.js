/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import LikeBtn from './LikeBtn';

export const ExhibitionItem = ({ exhibition, showLikeBtn = 'true' }) => {
  return (
    <div css={exhibitionItem}>
      <div css={poster}>
        <Link to={`/exhibition/${exhibition.id}`}>
          <img src={exhibition.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/exhibition/${exhibition.id}`}>{exhibition.title}</Link>
        {showLikeBtn && <LikeBtn />}
      </div>
      <div css={location}>
        {exhibition.galleryName}/ {exhibition.area}
      </div>
      <div css={period}>
        {exhibition.startDate} ~ {exhibition.endDate}
      </div>
    </div>
  );
};

export default ExhibitionItem;

const exhibitionItem = css`
  // border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const poster = css`
  cursor: pointer;
  img {
    width: 250px;
    height: 100%;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
  margin-bottom: 10px;
`;

const title = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-size: 20px;

  span {
    text-align: right;
  }

  img {
    width: 25px;
    cursor: pointer;
  }
`;

const location = css`
  font-size: 15px;
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;
