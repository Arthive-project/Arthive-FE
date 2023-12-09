/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdBanner from '../components/AdBanner';
import SubBanner from '../components/SubBanner';
import data from '../api/home-mock.json';

const Home = () => {
  const { hotExhibitions, recConcert, recFestival } = data;

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
        name='꼭 가봐야 할 공연'
        mapPoint={'/concert'}
        data={recConcert}
        showExhibit={true}
      />
      <SubBanner
        name='0월 추천 축제'
        mapPoint={'/festival'}
        data={recFestival}
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
  padding-top: 60px;
  margin-bottom: 10px;
`;
