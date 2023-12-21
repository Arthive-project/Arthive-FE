/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { codenames, locationLists } from '../data/formOptions';

const INITIAL_STATE = {
  category: '전체',
  codename: '선택',
  searchQuery: '',
};

const AdminFilter = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onClearSelect = () => {
    setState(INITIAL_STATE);
  };

  const handleSearch = async () => {
    try {
      const { category, codename, searchQuery } = state;
      // const response = await axios.get('/api/search', {
      //   params: {
      //     category,
      //     codename,
      //     searchQuery,
      //   },
      // });
      console.log(category, codename, searchQuery);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(locationLists);
  return (
    <div css={exhibition_filter}>
      <select
        name='category'
        value={state.category}
        onChange={handleChangeState}
        css={filter_btn}
      >
        <option value={'분야'}>분야</option>
        <option value={'전시'}>전시</option>
        <option value={'공연'}>공연</option>
        <option value={'축제'}>축제</option>
      </select>
      <select
        name='codename'
        value={state.codename}
        onChange={handleChangeState}
        css={codename_btn}
      >
        {codenames.map((group) => (
          <option key={group.label} value={group.value}>
            {group.label}
          </option>
        ))}
      </select>
      <input
        css={search}
        type='text'
        placeholder='공연명을 입력하세요'
        value={state.searchQuery}
        onChange={(e) => setState({ ...state, searchQuery: e.target.value })}
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

const filter_btn = css`
  width: 102px;
`;

const codename_btn = css`
  width: 115px;
`;

const search = css`
  width: 220px;
  padding: 5px;
  font-size: 15px;
`;
