/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div css={search_bar}>
      <input
        name='keyword'
        value={value}
        onChange={onChange}
        placeholder='검색어를 입력해주세요.'
      />
      <button type='submit'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/searchBtn.png`}
          alt='검색버튼'
        />
      </button>
    </div>
  );
};

export default SearchBar;

const search_bar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 52px;
  border-radius: 30px;
  border: 2px solid #070707;
  background: #f9f9f9;
  margin-bottom: 100px;
  margin-top: -80px;
  margin: 0 auto;

  input {
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 17px;
    padding-right: 15px;
    margin-right: 8px;
  }

  button {
    border: none;
    height: 50px;
    background-color: transparent;
    align-items: center;
    cursor: pointer;
    padding-top: 10px;
  }

  img {
    width: 25px;
    margin-bottom: 5px;
  }
`;
