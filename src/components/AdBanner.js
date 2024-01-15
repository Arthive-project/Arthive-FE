/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const AdBanner = () => {
  return (
    <div css={adBanner_wrap}>
      <Swiper
        css={adBanner_swiper}
        modules={[Pagination, Autoplay]}
        spaceBetween={0} // 슬라이드 간격
        slidesPerView={1} // 한번에 보여지는 슬라이드 개수
        loop={true} // 루프 슬라이드
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{
          '--swiper-pagination-color': '#C3FD1E',
          '--swiper-pagination-bullet-size': '10px',
        }}
      >
        <SwiperSlide>
          <a href='/exhibition/860'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/AdBannerImg/보타닉메이즈.png`}
              alt='광고 이미지_1'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/exhibition/20'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/AdBannerImg/오사카파노라마.png`}
              alt='광고 이미지_2'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/exhibition/211'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/AdBannerImg/아뜰리에광화.png`}
              alt='광고 이미지_5'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/exhibition/147'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/AdBannerImg/서울로미디어캔버스.png`}
              alt='광고 이미지_4'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/concert/25'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/AdBannerImg/노트르담드파리.png`}
              alt='광고 이미지_3'
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdBanner;

const adBanner_wrap = css`
  width: 1160px;
  margin-top: 50px;
  margin-bottom: 150px;
`;

const adBanner_swiper = css`
  border-radius: 47px;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
