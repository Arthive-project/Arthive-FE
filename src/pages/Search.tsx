/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BoardHeader from '../components/BoardHeader';
import { getExhibitions } from '../api';
import BoardList from '../components/BoardList';
import BoardItem from '../components/BoardItem';
import SearchBar from '../components/SearchBar';

interface EventItem {
  id: string;
  MAIN_IMG: string;
  TITLE: string;
  DATE?: string;
  linkPath: string;
}

interface Exhibition extends EventItem {
  id: string;
  MAIN_IMG: string;
  TITLE: string;
  DATE?: string;
}

interface DisplayItem {
  id: string;
}

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState<string>(initKeyword || '');
  const [trimmedKeyword, setTrimmedKeyword] = useState<string | undefined>(
    undefined
  );
  const [count, setCount] = useState<number | null>(null);

  const [exhibitions, setExhibitions] = useState<EventItem[]>([]);
  const [concerts, setConcerts] = useState<EventItem[]>([]);
  const [festivals, setFestivals] = useState<EventItem[]>([]);

  const handleKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setExhibitions([]);
    setConcerts([]);
    setFestivals([]);

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
      const exhibitionsData: Exhibition[] =
        await getExhibitions(trimmedKeyword);
      const eventItems: EventItem[] = exhibitionsData.map((exhibition) => ({
        id: exhibition.id,
        MAIN_IMG: exhibition.MAIN_IMG,
        TITLE: exhibition.TITLE,
      }));
      setExhibitions(eventItems);
    } catch (error) {
      console.error('데이터를 가져오는 데 실패했습니다.:', error);
    }
  };

  return (
    <>
      <div css={search}>
        <BoardHeader text='통합 검색' />
        <form onSubmit={handleSubmit}>
          <SearchBar onChange={handleKeywordChange} value={keyword} />
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
          <a href='#concert'>
            <div>공연</div>
          </a>
          <a href='#festival'>
            <div>축제</div>
          </a>
        </div>
        <div css={search_result}>
          <div id='exhibition'>
            <div css={result_title}>
              <h3>전시({exhibitions.length})</h3>
            </div>
            <hr />
            <BoardList>
              {exhibitions.map((exhibition) => {
                return (
                  <BoardItem
                    key={exhibition.id}
                    data={exhibition}
                    {...exhibition}
                  />
                );
              })}
            </BoardList>
          </div>
          <div id='concert'>
            <h3>공연({concerts.length})</h3> <hr />
            <BoardList>
              {concerts.map((concert) => {
                return (
                  <BoardItem key={concert.id} data={concert} {...concert} />
                );
              })}
            </BoardList>
          </div>
          <div id='festival'>
            <h3>축제({festivals.length})</h3> <hr />
            <BoardList>
              {festivals.map((festival) => {
                return (
                  <BoardItem key={festival.id} data={festival} {...festival} />
                );
              })}
            </BoardList>
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
  width: 1160px;
  margin: 0 auto;
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
    width: 385px;
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
  width: 100%;
  margin: 70px 0;

  hr {
    margin: 30px 0 100px;
  }
`;

const result_title = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;
