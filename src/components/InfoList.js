/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const InfoList = ({ label, input, labelSub = false, labelSubText }) => {
  const {
    name,
    value,
    type,
    onChange,
    placeholder,
    checkInput = '',
    accept,
  } = input;

  const isError = value?.length !== 0 && checkInput.isConfirm === false;

  return (
    <div css={info_list}>
      <div css={info_label}>{label}</div>
      {labelSub && <p css={label_sub}>{labelSubText}</p>}
      <div css={info_input}>
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          accept={accept}
        />
        {isError && <span css={error_msg}>{checkInput.errorMessage}</span>}
      </div>
    </div>
  );
};

export default InfoList;

const info_list = css`
  // border: 1px solid pink;
  margin-bottom: 23px;
  width: 100%;
`;

const info_label = css`
  font-size: 15px;
  font-weight: 400;
  color: #282828;
  margin-bottom: 3px;
`;

const info_input = css`
  input {
    width: 100%;
    height: 34px;
    border: 1px solid #d9d9d9;
    padding: 0 8px;
    margin-top: 4px;
  }

  input::placeholder {
    color: #999999;
  }
`;

const label_sub = css`
  font-size: 12px;
  font-weight: 400;
  color: #5e5e5e;
  margin: 5px 2px;
`;

const error_msg = css`
  font-size: 12px;
  color: red;
`;
