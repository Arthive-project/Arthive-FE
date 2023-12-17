/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BoardHeader from '../components/BoardHeader';

const MyLikes = () => {
  const [selectedTab, setSelectedTab] = useState('exhibition'); // 초기 선택 탭

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // 버튼 클릭 시 선택된 탭 업데이트
  };

  // 선택된 탭에 따라 결과를 로딩하는 컴포넌트를 리턴
  const renderResult = () => {
    switch (selectedTab) {
      case 'exhibition':
        return <div>전시 결과가 로딩됩니다.</div>; // BoardItem 컴포넌트 리턴
      case 'concert':
        return <div>콘서트 결과가 로딩됩니다.</div>;
      case 'festival':
        return <div>축제 결과가 로딩됩니다.</div>;
      default:
        return null;
    }
  };

  return (
    <div css={my_likes}>
      <BoardHeader
        text='관심 목록'
        showHr={false}
        showText={true}
        subText='마음에 드는 공연과 행사를 저장해보세요.'
      />
      <div css={board_btn}>
        <a href='#exhibition'>
          <button onClick={() => handleTabClick('exhibition')}>전시</button>
        </a>
        <a href='#concert'>
          <button onClick={() => handleTabClick('concert')}>공연</button>
        </a>
        <a href='#festival'>
          <button onClick={() => handleTabClick('festival')}>축제</button>
        </a>
      </div>
      <div css={search_count}>
        <p>()명의 관심 ()가 있습니다.</p>
      </div>
      <div css={like_result}>{renderResult()}</div>
    </div>
  );
};

export default MyLikes;

const my_likes = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const board_btn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  button {
    border: 1px solid black;
    width: 385px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    cursor: pointer;
    font-size: 18px;
  }

  button:hover {
    background-color: black;
    color: white;
  }
`;

const search_count = css`
  width: 1160px;
  margin: 10px 0;
  font-size: #1e1e1e;
`;

const like_result = css`
  height: 300px;
`;
