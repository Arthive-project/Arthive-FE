/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const BoardList = ({ children }) => {
  return <div css={board_list}>{children}</div>;
};

export default BoardList;

const board_list = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  gap: 50px;
  width: 1156px;
  height: 100%;
  margin-bottom: 70px;
  margin: 0 auto;
`;
