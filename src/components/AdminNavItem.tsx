/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

interface AdminNavItemProps {
  page: string;
  title: string;
}

const AdminNavItem = ({ page, title }: AdminNavItemProps) => {
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
  background-color: #f0f0f0;
  color: #333;
`;
