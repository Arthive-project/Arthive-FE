/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import AddContainer from '../../components/AddContainer';
import KaKaoMap from '../../components/KakaoMap';
import LikeBtn from '../../components/LikeBtn';
import { getPostDetailById } from '../../api/requestAPI';

const DetailPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const result = await getPostDetailById(itemId);
      setItem(result);
    };

    fetchItem();
  }, [itemId]);

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <>
      <BoardHeader text={item.CODENAME} showHr={true} />
      <BoardDetail src={item.MAIN_IMG}>
        <h2>{item.TITLE}</h2>
        <table>
          <tbody>
            <tr>
              <th>장소</th>
              <td>{item.PLACE}</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>{address}</td>
            </tr>
            <tr>
              <th>기간</th>
              <td>{item.DATE}</td>
            </tr>
            <tr>
              <th>대상</th>
              <td>{item.USE_TRGT}</td>
            </tr>
            <tr>
              <th>요금</th>
              <td>{item.IS_FREE || item.USE_FEE}</td>
            </tr>
            <tr>
              <th>사이트</th>
              <td>
                <a href={item.ORG_LINK}>홈페이지 바로가기</a>
              </td>
            </tr>
          </tbody>
        </table>
        <LikeBtn />
      </BoardDetail>

      <AddContainer>
        {item.PLAYER || item.PROGRAM ? (
          <div css={additional_info}>
            <h2>추가 정보</h2>
            <p>
              ㅇ<span>출연자 정보: </span>
              {item.PLAYER}
            </p>
            <p>
              ㅇ <span>프로그램 소개: </span>
              {item.PROGRAM}
            </p>
          </div>
        ) : (
          <></>
        )}
        <h2>위치 안내</h2>
        <KaKaoMap
          LOT={item.LOT}
          LAT={item.LAT}
          onAddressChange={handleAddressChange}
        />
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
