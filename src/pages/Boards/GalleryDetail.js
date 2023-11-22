import { useParams } from 'react-router-dom';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import { getGalleryById } from '../../api';
import LikeBtn from '../../components/LikeBtn';

const GalleryDetail = () => {
  const { galleryId } = useParams();
  const gallery = getGalleryById(galleryId);

  return (
    <>
      <BoardHeader text='Gallery' />
      <BoardDetail src={gallery.posterUrl}>
        <table>
          <tbody>
            <tr>
              <th>
                갤러리명<span>|</span>
              </th>
              <td>{gallery.galleryName}</td>
            </tr>
            <tr>
              <th>
                주소<span>|</span>
              </th>
              <td>{gallery.address}</td>
            </tr>
            <tr>
              <th>
                휴관일<span>|</span>
              </th>
              <td>{gallery.closedDay}</td>
            </tr>
            <tr>
              <th>
                운영시간<span>|</span>
              </th>
              <td>
                {gallery.openTime} ~ {gallery.closedTime}
              </td>
            </tr>
            <tr>
              <th>
                홈페이지<span>|</span>
              </th>
              <td>
                <a href={gallery.galleriesSiteUrl}>갤러리 홈페이지 바로가기</a>
              </td>
            </tr>
          </tbody>
        </table>
        <LikeBtn />
      </BoardDetail>
    </>
  );
};

export default GalleryDetail;
