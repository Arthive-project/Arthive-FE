/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import ExhibitionItem from './ExhibitionItem';
import GalleryItem from './GalleryItem';
import BoardItem from './BoardItem';

const SubBanner = ({
  name,
  mapPoint,
  data,
  showExhibit = false,
  showGallery = false,
}) => {
  return (
    <div css={subBanner}>
      <div css={subBanner_title}>
        <h2>{name}</h2>
        <span css={more_btn}>
          <Link to={mapPoint}>더보기</Link>
        </span>
      </div>
      <Swiper
        css={subBanner_swiper}
        modules={[Navigation, Scrollbar]}
        spaceBetween={47}
        slidesPerView={4}
        loop={true}
        navigation={true}
        scrollbar={{ draggable: true }}
        style={{
          // 화살표 스타일
          '--swiper-navigation-color': '#000000',
          '--swiper-navigation-size': '28px',
        }}
      >
        {showExhibit &&
          data.map((exhibition) => {
            return (
              <SwiperSlide key={exhibition.id}>
                {
                  <BoardItem
                    key={exhibition.id}
                    data={exhibition}
                    {...exhibition}
                    showLikeBtn={false}
                  />
                }
              </SwiperSlide>
            );
          })}
        {showGallery &&
          data.map((gallery) => {
            return (
              <SwiperSlide key={gallery.id}>
                {
                  <GalleryItem
                    key={gallery.id}
                    gallery={gallery}
                    {...gallery}
                    showLikeBtn={false}
                  />
                }
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SubBanner;

const subBanner = css`
  // border: 1px solid pink;
  width: 100%;
  margin-bottom: 120px;
`;

const subBanner_title = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin: 0 40px;
`;

const more_btn = css`
  background-color: #c3fd1e;
  color: black;
  border-radius: 20px;

  a {
    color: black;
    padding: 2px 9px;
    font-size: 13px;
    font-weight: 500;
    align-items: center;
    text-decoration: none;
  }
`;

const subBanner_swiper = css`
  // border: 1px solid black;
  width: 100%;
  padding: 10px 40px 0 40px;
`;
