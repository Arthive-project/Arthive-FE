/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = ({ name, onClick }) => {
  return (
    <button css={button} onClick={onClick}>
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
  margin-top: 30px;
  border: none;
  cursor: pointer;
`;
