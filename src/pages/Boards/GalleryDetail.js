/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import BoardDetail from '../../components/BoardDetail';
import BoardHeader from '../../components/BoardHeader';
import { getGalleryById } from '../../api';

const GalleryDetail = () => {
  const { galleryId } = useParams();
  const gallery = getGalleryById(galleryId);

  return (
    <>
      <BoardHeader text='Gallery' />
      <BoardDetail src={gallery.posterUrl}>
        <div css={gallery_table}>
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
                  <a href={gallery.galleriesSiteUrl}>
                    갤러리 홈페이지 바로가기
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BoardDetail>
    </>
  );
};

export default GalleryDetail;

const gallery_table = css`
  display: flex;
  width: 473px;
  justify-content: center;

  table {
    height: 260px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  th,
  td {
    border-bottom: 1px solid #e9e9e9;
    font-weight: normal;
  }

  td {
    padding-left: 20px;
    color: #464646;
  }

  span {
    float: right;
    color: #d9d9d9;
  }

  a {
    color: black;
  }
`;
