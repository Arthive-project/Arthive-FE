/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import AddContainer from '../../components/AddContainer';
import KaKaoMap from '../../components/KakaoMap';
import LikeBtn from '../../components/LikeBtn';
import { getDetailByCategory } from '../../api';

const DetailPage = ({ category }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await getDetailByCategory(category, itemId);
      setItem(result);
    };
    fetchItem();
  }, [category, itemId]);

  return (
    <>
      <BoardHeader text={item.category} showHr={true} />
      <BoardDetail src={item.posterUrl}>
        <h2>
          서울시향과 함께하는 미라클(美樂Classic)서울 - 크리스마스 페스티벌
          {item.title}
        </h2>
        <table>
          <tbody>
            <tr>
              <th>장소</th>
              <td>{item.galleryName}</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>{item.address}</td>
            </tr>
            <tr>
              <th>기간</th>
              <td>
                {item.startDate} ~ {item.endDate}
              </td>
            </tr>
            <tr>
              <th>대상</th>
              <td>{item.use_trgt}</td>
            </tr>
            <tr>
              <th>요금</th>
              <td>{item.isFree || item.entranceFee}</td>
            </tr>
            <tr>
              <th>사이트</th>
              <td>
                <a href={item.gallerySiteUrl}>홈페이지 바로가기</a>
              </td>
            </tr>
          </tbody>
        </table>
        <LikeBtn />
      </BoardDetail>

      <AddContainer>
        {item.player || item.program || item.etc_des ? (
          <div css={additional_info}>
            <h2>추가 정보</h2>
            <p>
              ㅇ<span>출연자 정보: </span>
              {item.player}
            </p>
            <p>
              ㅇ <span>프로그램 소개: </span>
              {item.program}
            </p>
            <p>
              ㅇ <span>기타 내용: </span>
              {item.etc_des}
            </p>
          </div>
        ) : (
          <></>
        )}
        <h2>위치 안내</h2>
        <KaKaoMap address={item.address} />
      </AddContainer>
    </>
  );
};

export default DetailPage;

const additional_info = css`
  width: 700px;
  margin-bottom: 50px;
  text-align: center;

  p {
    font-size: 15px;
    margin: 15px;

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
