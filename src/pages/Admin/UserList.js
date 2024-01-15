/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import { getListAllUsers } from '../../api/adminAPI';

const UserList = () => {
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
      const res = await getListAllUsers();
      console.log(res);
      setPosts(res);
    };

    fetchData();
  }, []);

  return (
    <div css={posts}>
      <h2>유저 관리</h2>
      <div css={list}>
        <table>
          <tbody>
            <tr>
              <th>NO</th>
              <th>이름</th>
              <th>이메일</th>
              <th>생년월일</th>
              <th>권한</th>
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

export default UserList;

export const PostItem = ({ data }) => {
  return (
    <tr>
      <td css={id}>{data.id}</td>
      <td css={codename}>{data.name}</td>
      <td css={title}>
        <Link to={`/admin/post-detail/${data.id}`}>{data.email}</Link>
      </td>
      <td css={birthday}>{data.birthday}</td>
      <td css={role}>유저</td>
    </tr>
  );
};

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
    margin-top: 80px;
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
  width: 100px;
`;

const codename = css`
  width: 200px;
`;

const title = css`
  width: 400px;
`;

const birthday = css`
  width: 300px;
`;

const role = css`
  width: 200px;
`;
