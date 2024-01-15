/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const AdminFilter = ({ setSearchQuery, setSearchTriggered }) => {
  const [searchQuery, setSearchQueryLocal] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchQuery);
    setSearchTriggered(true);
  };

  const onClearSelect = () => {
    setSearchQuery('');
    setSearchTriggered(true);
  };

  return (
    <div css={exhibition_filter}>
      <input
        css={search}
        type='text'
        placeholder='공연/행사명을 입력하세요'
        value={searchQuery}
        onChange={(e) => setSearchQueryLocal(e.target.value)}
      ></input>
      <button onClick={handleSearch}>검색</button>
      <button onClick={onClearSelect}>초기화</button>
    </div>
  );
};

export default AdminFilter;

const exhibition_filter = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  min-width: 1000px;
  height: 42px;
  margin: 0 auto;
  margin-bottom: 55px;

  button {
    width: 102px;
    height: 41px;
    background-color: white;
    border: 1px solid #5e5e5e;
    font-size: 18px;
    cursor: pointer;
  }

  select {
    height: 41px;
    background-color: white;
    border: 1px solid #5e5e5e;
    font-size: 18px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    outline: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const search = css`
  width: 220px;
  padding: 5px;
  font-size: 15px;
`;
