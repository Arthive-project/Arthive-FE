/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const AddContainer = ({ children }) => {
  return <div css={map_container}>{children}</div>;
};

export default AddContainer;

const map_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1120px;
  padding: 100px;
  border-top: 1px solid gray;
  margin: 0 auto;

  h2 {
    margin-bottom: 30px;
  }
`;
