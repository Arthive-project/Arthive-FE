/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const BoardHeader = ({ text, showHr = true, showText = false, subText }) => {
  return (
    <div css={boardHeader}>
      <p>{text}</p>
      {showHr && <hr />}
      {showText && <p css={sub_text}>{subText}</p>}
    </div>
  );
};

export default BoardHeader;

const boardHeader = css`
  display: flex;
  flex-direction: column;
  height: 200px;
  font-size: 23px;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid gray;
    width: 45px;
    margin-top: 10px;
  }
`;

const sub_text = css`
  font-size: 14px;
  font-weight: 400;
  margin: 15px;
  text-align: center;
  color: #272727;
`;
