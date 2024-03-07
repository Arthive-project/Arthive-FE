/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface BoardListProps {
  children: ReactNode;
}

const BoardList = ({ children }: BoardListProps) => {
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
  margin: 0 auto 100px auto;
`;
