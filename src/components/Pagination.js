/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul css={page_ul}>
          {pageNumbers.map((number) => (
            <li key={number} css={page_li}>
              <button onClick={() => paginate(number)} css={page_btn}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

const page_ul = css`
  margin: 0 auto;
  width: 50%;
  list-style: none;
  text-align: center;
  color: white;
  padding: 1px;
`;

const page_li = css`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
`;

const page_btn = css`
  background-color: transparent;
  border: none;
  width: 15px;
  cursor: pointer;
`;
