/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const BoardHeader = ({ text, showText = false, subText }) => {
  return (
    <div css={boardHeader}>
      <h2>{text}</h2>
      {showText && <p css={sub_text}>{subText}</p>}
    </div>
  );
};

export default BoardHeader;

const boardHeader = css`
  display: flex;
  flex-direction: column;
  height: 400px;
  font-size: 37px;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 30px;
    font-size: 37px;
    font-weight: bold;
  }
`;

const sub_text = css`
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  color: #272727;
`;
