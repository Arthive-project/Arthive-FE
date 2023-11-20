/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdBanner from '../components/AdBanner';
import SubBanner from '../components/SubBanner';

const Home = () => {
  return (
    <div css={banners_wrap}>
      <AdBanner />
      <SubBanner />
      <SubBanner />
      <SubBanner />
    </div>
  );
};

export default Home;

const banners_wrap = css`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1220px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;
