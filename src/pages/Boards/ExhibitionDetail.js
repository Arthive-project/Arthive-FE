import { useParams } from 'react-router-dom';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import { getExhibitionById } from '../../api';
import MapContainer from './MapContainer';
import KaKaoMap from '../../components/KakaoMap';
import LikeBtn from '../../components/LikeBtn';

const ExhibitionDetail = () => {
  const { exhibitionId } = useParams();
  const exhibition = getExhibitionById(exhibitionId);

  return (
    <>
      <BoardHeader text='Exhibition' />
      <BoardDetail src={exhibition.posterUrl}>
        <table>
          <tbody>
            <tr>
              <th>
                전시
                <span>|</span>
              </th>
              <td>{exhibition.title}</td>
            </tr>
            <tr>
              <th>
                기간
                <span>|</span>
              </th>
              <td>
                {exhibition.startDate} ~ {exhibition.endDate}
              </td>
            </tr>
            <tr>
              <th>
                시간
                <span>|</span>
              </th>
              <td>
                {exhibition.openTime} ~ {exhibition.closedTime}
              </td>
            </tr>
            <tr>
              <th>
                위치
                <span>|</span>
              </th>
              <td>
                {exhibition.galleryName} / {exhibition.area}
              </td>
            </tr>
            <tr>
              <th>
                주소
                <span>|</span>
              </th>
              <td>{exhibition.address}</td>
            </tr>
            <tr>
              <th>
                휴관
                <span>|</span>
              </th>
              <td>일요일</td>
            </tr>
            <tr>
              <th>
                관람료
                <span>|</span>
              </th>
              <td>{exhibition.entranceFee}</td>
            </tr>
            <tr>
              <th>
                사이트
                <span>|</span>
              </th>
              <td>
                <a href={exhibition.gallerySiteUrl}>홈페이지 바로가기</a>
              </td>
            </tr>
          </tbody>
        </table>
        <LikeBtn />
      </BoardDetail>

      <MapContainer>
        <KaKaoMap address={exhibition.address} />
      </MapContainer>
    </>
  );
};

export default ExhibitionDetail;
