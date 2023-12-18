/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const AdminNavItem = ({ page, title }) => {
  const location = useLocation();
  return (
    <li
      css={{
        ...(location.pathname.split('/')[2] === page.split('/')[2]
          ? activeStyle
          : {}),
      }}
    >
      <Link to={page}>
        <span>{title}</span>
        <MdOutlineArrowForwardIos size='12' color='rgb(95, 0, 128)' />
      </Link>
    </li>
  );
};
export default AdminNavItem;

const activeStyle = css`
  // Add your active styles here
  background-color: #f0f0f0;
  color: #333;
`;
