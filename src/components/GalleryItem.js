/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ gallery }) => {
  return (
    <div css={itemWrap}>
      <div css={poster}>
        <Link to={`/gallery/${gallery.id}`}>
          <img src={gallery.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/gallery/${gallery.id}`}>{gallery.galleryName}</Link>
      </div>
      <div css={SubTitle}>{gallery.address}</div>
    </div>
  );
};

export default GalleryItem;

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

  a {
    text-decoration: none;
    color: black;
  }
`;

const SubTitle = css`
  font-size: 15px;
`;

const itemWrap = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 437px;
  margin-bottom: 20px;
`;
