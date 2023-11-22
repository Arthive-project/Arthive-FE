/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import BoardHeader from './BoardHeader';

const BoardDetail = ({ children, src }) => {
  return (
    <div css={detail_wrap}>
      <div css={img_wrap}>
        <img src={src} alt='poster' />
      </div>
      <div css={detail_table}>{children}</div>
    </div>
  );
};

export default BoardDetail;

const detail_wrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  width: 1120px;
  height: 500px;
  margin: 0 auto 100px auto;
`;

const img_wrap = css`
  display: flex;
  justify-content: center;
  width: 500px;

  img {
    max-width: 500px;
    max-height: 500px;
    height: 100%;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
  }
`;
const detail_table = css`
  border: 1px solid blue;
`;
