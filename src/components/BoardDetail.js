/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 478px;

  h2 {
    color: #222222;
  }

  table {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  th {
    padding: 18px 10px;
    marin-right: 10px;
    border-right: 1px solid #e9e9e9;
  }

  th,
  td {
    border-bottom: 1px solid #e9e9e9;
    font-weight: normal;
  }

  td {
    padding-left: 20px;
    color: #464646;
  }

  span {
    float: right;
    color: #d9d9d9;
    height: 30px;
  }

  img {
    float: right;
    width: 28px;
    margin-right: 10px;
  }
`;
