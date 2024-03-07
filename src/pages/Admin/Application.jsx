/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdminFilter from '../../components/AdminFilter';
import { useState, useEffect } from 'react';
import { getAllApplications } from '../../api';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const Application = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    return posts.slice(indexOfFirst, indexOfLast);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllApplications();
      setApplications(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>등록 신청 내역</h2>
      <div>
        <AdminFilter />
      </div>
      <div css={list}>
        <table>
          <tr>
            <th>NO</th>
            <th>신청자</th>
            <th>현황</th>
            <th>공연/행사명</th>
            <th>신청일</th>
          </tr>
          {currentPosts(applications).map((application) => {
            return <PostItem key={application.id} data={application} />;
          })}
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={applications.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Application;

export const PostItem = ({ data }) => {
  return (
    <tr>
      <td css={id}>{data.id}</td>
      <td css={codename}>{data.applicant}</td>
      <td css={status}>{data.status}</td>
      <td css={title}>
        <Link to={`/admin/application-detail/${data.id}`}>{data.title}</Link>
      </td>
      <td css={status}>{data.application_date}</td>
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
