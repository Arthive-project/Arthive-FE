/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board, data }) => {
  return (
    <div css={board_item}>
      <Link to={`/${board}`}>
        <img src={`/${board}.posterUrl`} alt='포스터' />
      </Link>
      <div css={title}>{data.title}</div>
      <div css={title_second}>부제</div>
      <div css={title_third}>설명</div>
    </div>
  );
};

export default BoardItem;

const board_item = css``;
const title = css``;
const title_second = css``;
const title_third = css``;
