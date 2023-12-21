/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';

const Review = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts ? posts.slice(indexOfFirst, indexOfLast) : [];
    return currentPosts;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts();
      setPosts(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='리뷰 게시판' showHr={true} />
      <div css={review}>
        <SearchBar />
        <p css={review_count}>
          총 <span>30</span>건의 리뷰가 있습니다.
        </p>
        <div css={list}>
          <table>
            <tbody>
              <tr>
                <th>글 번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
              {currentPosts(posts).map((register) => {
                return <ReviewItem key={register.id} data={register} />;
              })}
            </tbody>
          </table>
          <button css={rgst_btn}>
            <Link to={'/admin/post-register'}>등록</Link>
          </button>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Review;

const ReviewItem = ({ data }) => {
  return (
    <tr>
      <td css={id}>{data.id}</td>
      <td css={title}>
        <Link to={`/review/${data.id}`}>{data.title}</Link>
      </td>
      <td css={writer}>{data.user}</td>
      <td css={date}>{data.regst_date}</td>
    </tr>
  );
};

const review = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1156px;
  margin: 0 auto 200px;
  // border: 1px solid blue;
`;

const review_count = css`
  margin: 50px 0 100px;
  font-size: 17px;

  span {
    color: #245200;
    font-weight: bold;
  }
`;

const list = css`
width: 100%;
min-width: 1000px;
display: flex;
flex-direction: column;
margin: 100px 0;
margin: 0 auto; 

h2 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 30px;

  tr {
    height: 50px;
  }

  th {
    height: 40px;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 1px solid #979797;
    text-align: center;
  }

  td {
    height: 45px;
    border-bottom: 1px solid #e9e9e9;
    font-size: 14px;
    text-align: center;
    color: #3d3d3d;

  }

  a {
    text-align: end;
    text-decoration: none;
    color: black;
  }
`;

const id = css`
  width: 40px;
`;
const title = css`
  width: 300px;
`;
const writer = css`
  width: 50px;
`;
const date = css`
  width: 50px;
`;

const rgst_btn = css`
  width: 102px;
  height: 41px;
  background-color: white;
  border: 1px solid #5e5e5e;
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;

  a {
    text-decoration: none;
    color: black;
  }
`;
