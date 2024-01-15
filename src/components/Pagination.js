/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNumbers = 10;
  let startPage = 1;
  let endPage = Math.min(startPage + maxPageNumbers - 1, pageNumbers.length);

  if (currentPage > Math.floor(maxPageNumbers / 2)) {
    startPage = currentPage - Math.floor(maxPageNumbers / 2);
    endPage = startPage + maxPageNumbers - 1;
  }

  return (
    <div>
      <nav>
        <ul css={page_ul}>
          {currentPage > 1 && (
            <li css={page_li}>
              <button onClick={() => paginate(currentPage - 1)} css={page_btn}>
                {'<'}
              </button>
            </li>
          )}
          {pageNumbers.slice(startPage - 1, endPage).map((number) => (
            <li key={number} css={page_li}>
              <button
                onClick={() => paginate(number)}
                css={page_btn}
                style={{
                  fontWeight: currentPage === number ? 'bold' : 'normal',
                }}
              >
                {number}
              </button>
            </li>
          ))}
          {currentPage < pageNumbers.length && (
            <li css={page_li}>
              <button onClick={() => paginate(currentPage + 1)} css={page_btn}>
                {'>'}
              </button>
            </li>
          )}
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
