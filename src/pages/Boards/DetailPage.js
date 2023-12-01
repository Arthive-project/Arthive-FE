import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import MapContainer from './MapContainer';
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
      <BoardHeader text={item.category} />
      <BoardDetail src={item.posterUrl}>
        <table>
          <tbody>
            <tr>
              <th>
                제목
                <span>|</span>
              </th>
              <td>{item.title}</td>
            </tr>
            <tr>
              <th>
                기간
                <span>|</span>
              </th>
              <td>
                {item.startDate} ~ {item.endDate}
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
