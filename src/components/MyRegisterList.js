/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import BoardHeader from './BoardHeader';
import { getMyRegisters } from '../api';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const MyRegisterList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  // const myRegisters = getMyRegisters();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyRegisters();
      setPosts(response);
    };
    fetchData();
    console.log(posts);
  }, []);

  return (
    <div css={my_register_list}>
      <BoardHeader text='전시 신청 내역' />
      <div css={board_btn}>
        <a href={'/my-page'}>
          <div>회원 정보 수정</div>
        </a>
        <a href={'/my-register'}>
          <div>전시 등록 신청 내역</div>
        </a>
      </div>
      <div css={register_list}>
        <h2>전시 등록 신청 내역</h2>
        <table>
          <tbody>
            <tr>
              <th css={register_day}>신청 일시 </th>
              <th css={register_title}>신청 내용</th>
              <th css={register_status}>현황</th>
            </tr>
            {currentPosts(posts).map((register) => {
              return <MyRegisterItem key={register.id} data={register} />;
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

export default MyRegisterList;

export const MyRegisterItem = ({ data }) => {
  console.log(data);

  return (
    <tr>
      <td css={register_day}>{data.registerDay}</td>
      <td css={register_title}>
        <Link to={`/my-register/${data.id}`}>{data.title} </Link>
      </td>
      <td css={register_status}>{data.status}</td>
    </tr>
  );
};

const board_btn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  div {
    border: 1px solid black;
    width: 580px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }

  div:hover {
    background-color: black;
    color: white;
  }
`;

const my_register_list = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
`;

const register_list = css`
  width: 1160px;
  display: flex;
  flex-direction: column;
  margin: 100px 0;

  h2 {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 30px;

    th {
      height: 40px;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 1px solid #979797;
      text-align: center;
    }

    td {
      height: 35px;
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

const register_day = css`
  width: 100px;
`;

const register_title = css`
  width: 400px;
`;

const register_status = css`
  width: 100px;
`;
