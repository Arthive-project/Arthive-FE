/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const LikeBtn = ({ like, onClick }) => {
  const heartEmpty = `${process.env.PUBLIC_URL}/assets/heartEmpty.png`;
  const heartFull = `${process.env.PUBLIC_URL}/assets/heartFull.png`;

  return (
    <button css={like_btn} onClick={onClick}>
      <img src={like ? heartFull : heartEmpty} alt='찜' />
    </button>
  );
};

export default LikeBtn;

const like_btn = css`
  border: none;
  background-color: transparent;
  height: 25px;
  float: right;

  img {
    width: 23px;
  }
`;
