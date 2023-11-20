/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdBanner from '../components/AdBanner';
import SubBanner from '../components/SubBanner';
import data from '../api/home-mock.json';

const Home = () => {
  const { hotExhibitions, monExhibitions, recGalleries } = data;

  return (
    <div css={banners_wrap}>
      <AdBanner />
      <SubBanner
        name='요즘 뜨는 전시'
        mapPoint={'/exhibition'}
        data={hotExhibitions}
        showExhibit={true}
      />
      <SubBanner
        name='12월 추천 전시회'
        mapPoint={'/exhibition'}
        data={monExhibitions}
        showExhibit={true}
      />
      <SubBanner
        name='이번주 추천 갤러리'
        mapPoint={'/gallery'}
        data={recGalleries}
        showGallery={true}
      />
    </div>
  );
};

export default Home;

const banners_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1220px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;
