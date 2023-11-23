/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const INITIAL_STATE = {
  period: '현재전시',
  order: '최신순',
  location: '지역 전체',
};

const ExhibitionFilter = () => {
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

  return (
    <div css={exhibition_filter}>
      <select
        name='period'
        value={state.period}
        onChange={handleChangeState}
        css={filter_btn}
      >
        <option value={'현재전시'}>현재전시</option>
        <option value={'예정전시'}>예정전시</option>
        <option value={'지난전시'}>지난전시</option>
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
        <option value={'서울'}>서울</option>
        <option value={'경기 인천'}>경기 인천</option>
        <option value={'대구 경북'}>대구 경북</option>
        <option value={'부산 울산 경남'}>부산 울산 경남</option>
        <option value={'광주 전라'}>광주 전라</option>
        <option value={'대전 충청 세종'}>대전 충청 세종</option>
        <option value={'제주 강원'}>제주 강원</option>
      </select>
      <button onClick={onClearSelect}>초기화</button>
    </div>
  );
};

export default ExhibitionFilter;

const exhibition_filter = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  width: 1156px;
  max-width: 100%;
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
