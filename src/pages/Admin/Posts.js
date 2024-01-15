/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import AdminFilter from '../../components/AdminFilter';
import { getListAllPosts, getOpenApi } from '../../api/adminAPI';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = posts
    .filter((post) =>
      post.TITLE.toLowerCase().includes(searchQuery1.toLowerCase())
    )
    .slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOpenApi();
      if (res) {
        const response = await getListAllPosts();
        setPosts(response);
      }
    };

    fetchData();
  }, [searchTriggered]);

  return (
    <div css={posts}>
      <h2>게시물 관리</h2>
      <div>
        <AdminFilter
          setSearchQuery={setSearchQuery1}
          setSearchTriggered={setSearchTriggered}
        />
      </div>
      <div css={list}>
        <table>
          <tbody>
            <tr>
              <th>NO</th>
              <th>카테고리</th>
              <th>공연/행사명</th>
              <th>작성일</th>
            </tr>
            {currentPosts.map((post) => (
              <PostItem key={post.id} data={post} />
            ))}
          </tbody>
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
      <Link to={'/admin/post-register'}>
        <button css={rgst_btn}>등록</button>
      </Link>
    </div>
  );
};

export default Posts;

export const PostItem = ({ data }) => {
  return (
    <tr>
      <td css={id}>{data.id}</td>
      <td css={codename}>{data.CODENAME}</td>
      <td css={title}>
        <Link to={`/admin/post-detail/${data.id}`}>{data.TITLE}</Link>
      </td>
      <td css={status}>{data.RGSTDATE}</td>
    </tr>
  );
};

const rgst_btn = css`
  width: 102px;
  height: 41px;
  background-color: white;
  border: 1px solid #5e5e5e;
  font-size: 18px;
  cursor: pointer;
  float: right;

  a {
    text-decoration: none;
    color: black;
  }
`;

const list = css`
  width: 95%;
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
  width: 70px;
`;

const codename = css`
  width: 100px;
`;

const title = css`
  width: 400px;
`;

const status = css`
  width: 100px;
`;
