/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BoardHeader from '../components/BoardHeader';
import { getExhibitions, getGalleries } from '../api';
import ExhibitionItem from '../components/ExhibitionItem';
import GalleryItem from '../components/GalleryItem';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const [trimmedKeyword, setTrimmedKeyword] = useState();
  const [count, setCount] = useState(null);

  const [exhibitions, setExhibitions] = useState([]);
  const [galleries, setGalleries] = useState([]);

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    setExhibitions([]);
    setGalleries([]);

    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword === '') {
      return;
    }

    setTrimmedKeyword(trimmedKeyword);
    setSearchParams(
      trimmedKeyword
        ? {
            keyword: trimmedKeyword,
          }
        : {}
    );

    try {
      // 검색어가 제출될 때마다 데이터를 가져오기
      const exhibitionsData = await getExhibitions(trimmedKeyword);
      setExhibitions(exhibitionsData);

      const galleriesData = await getGalleries(trimmedKeyword);
      setGalleries(galleriesData);

      setCount(exhibitions.length + galleries.length);
    } catch (error) {
      console.error('데이터를 가져오는 데 실패했습니다.:', error);
    }

    console.log(keyword);
    console.log(exhibitions);
    console.log(galleries);
  };

  return (
    <>
      <div css={search}>
        <BoardHeader text='통합 검색' />
        <form css={search_bar} onSubmit={handleSubmit}>
          <input
            name='keyword'
            value={keyword}
            onChange={handleKeywordChange}
            placeholder='검색어를 입력해주세요.'
          />
          <button type='submit'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/searchBtn.png`}
              alt='검색버튼'
            />
          </button>
        </form>
        <div css={search_count}>
          {count !== null && count > 0 ? (
            <p>
              &apos;{trimmedKeyword}&apos;에 대한 검색결과가 총 {count}개
              있습니다.
            </p>
          ) : (
            count !== null && (
              <p>{trimmedKeyword}에 대한 검색결과가 없습니다.</p>
            )
          )}
        </div>
        <div css={board_btn}>
          <a href='#exhibition'>
            <div>전시</div>
          </a>
          <a href='#gallery'>
            <div>갤러리</div>
          </a>
        </div>
        <div css={search_result}>
          <div id='exhibition'>
            <h3>전시({exhibitions.length})</h3> <hr />
            {exhibitions.map((exhibition) => {
              return (
                <ExhibitionItem
                  key={exhibition.id}
                  exhibition={exhibition}
                  {...exhibition}
                />
              );
            })}
          </div>
          <div id='gallery'>
            <h3>갤러리({galleries.length})</h3> <hr />
            {galleries.map((gallery) => {
              return (
                <GalleryItem key={gallery.id} gallery={gallery} {...gallery} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

const search = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 1040px;
  margin: 0 auto;
`;

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

const search_count = css`
  margin-bottom: 10px;
  font-size: #1e1e1e;
`;

const board_btn = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  div {
    border: 1px solid black;
    width: 520px;
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

const search_result = css`
  width: 1040px;
  margin: 70px 0;

  hr {
    margin: 30px 0 100px;
  }
`;
