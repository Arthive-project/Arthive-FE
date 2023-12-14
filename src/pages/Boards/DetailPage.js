/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import MapContainer from '../../components/MapContainer';
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
    console.log(item);
    console.log(category);
  }, [category, itemId]);

  if (!item) {
    return <p>Loading..!!.</p>;
  }

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
              {/* 이용요금 값 없을 시 유무료 값 보여줌 */}
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

      <MapContainer>
        <KaKaoMap address={item.address} />
      </MapContainer>
    </>
  );
};

export default DetailPage;
