/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { locationLists } from '../data/formOptions';

const INITIAL_STATE = {
  period: '현재전시',
  order: '최신순',
  location: '지역 전체',
};

const Filter = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // 정렬함수
  };

  const onClearSelect = () => {
    setState(INITIAL_STATE);
  };

  console.log(locationLists);
  return (
    <div css={exhibition_filter}>
      <select
        name='period'
        value={state.period}
        onChange={handleChangeState}
        css={filter_btn}
      >
        <option value={'현재공연'}>현재공연</option>
        <option value={'예정공연'}>예정공연</option>
        <option value={'지난공연'}>지난공연</option>
      </select>
      <select
        name='order'
        value={state.order}
        onChange={handleChangeState}
        css={filter_btn}
      >
        <option value={'최신순'}>최신순</option>
        <option value={'종료순'}>종료순</option>
        <option value={'인기순'}>인기순</option>
      </select>
      <select
        name='location'
        value={state.location}
        onChange={handleChangeState}
        css={filter_btn_local}
      >
        <option value={'지역전체'}>지역 전체</option>
        {locationLists.map((group) => (
          <option key={group.label} value={group.value}>
            {group.label}
          </option>
        ))}
      </select>
      <button onClick={onClearSelect}>초기화</button>
    </div>
  );
};

export default Filter;

const exhibition_filter = css`
  // border: 1px solid red;
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

const filter_btn_local = css`
  width: 122px;
`;
