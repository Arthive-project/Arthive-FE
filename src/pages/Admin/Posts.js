/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import ExhibitionFilter from '../../components/ExhibitionFilter';
import { getAllPosts } from '../../api';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

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
    <div>
      <h2>게시물 관리</h2>
      <div>
        <ExhibitionFilter />
      </div>
      <div css={register_list}>
        <table>
          <tbody>
            <tr>
              <th>NO</th>
              <th>카테고리</th>
              <th>공연/행사명</th>
              <th>작성일</th>
            </tr>
            {currentPosts(posts).map((post) => {
              return <PostItem key={post.id} data={post} />;
            })}
          </tbody>
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Posts;

export const PostItem = ({ data }) => {
  return (
    <tr>
      <td css={register_id}>{data.id}</td>
      <td css={register_codename}>{data.codename}</td>
      <td css={register_title}>
        <Link to={`/admin/post-detail/${data.id}`}>{data.title}</Link>
      </td>
      <td css={register_status}>{data.regst_date}</td>
    </tr>
  );
};

const register_list = css`
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

const register_id = css`
  width: 70px;
`;

const register_codename = css`
  width: 100px;
`;

const register_title = css`
  width: 400px;
`;

const register_status = css`
  width: 100px;
`;
