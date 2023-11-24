/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = ({ name }) => {
  return (
    <button css={button}>
      <span>{name}</span>
    </button>
  );
};

export default Button;

const button = css`
  width: 100%;
  height: 46px;
  background: #000;
  color: #fff;
  font-size: 18px;
  margin-top: 40px;
  border: none;
  cursor: pointer;
`;
