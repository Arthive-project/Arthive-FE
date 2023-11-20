/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SubBanner = () => {
  return (
    <div css={subBanner}>
      <div>SubBanner</div>
    </div>
  );
};

export default SubBanner;

const subBanner = css`
  border: 1px solid pink;
  width: 1160px;
`;
