/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const InfoList = ({
  label,
  input,
  typeIs,
  options,
  labelSub = false,
  labelSubText,
}) => {
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
      {typeIs === 'select' ? (
        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <div css={info_textarea}>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default InfoList;

const info_list = css`
  // border: 1px solid pink;
  margin: 10px 0 10px 0;
  width: 100%;

  select {
    width: 100%;
    height: 34px;
    border: 1px solid #d9d9d9;
    padding: 0 8px;
    margin-top: 4px;
  }
`;

const info_label = css`
  font-size: 15px;
  font-weight: 400;
  color: #282828;
  margin-bottom: 3px;
`;

const info_textarea = css`
  textarea {
    width: 100%;
    height: 74px;
    border: 1px solid #d9d9d9;
    padding: 3px 8px;
    margin-top: 4px;
    resize: none;
  }

  textarea::placeholder {
    color: #999999;
  }
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
