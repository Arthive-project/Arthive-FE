/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Form = ({ formId, onSubmit, children }) => {
  return (
    <div css={FormInfo}>
      <form id={formId} onSubmit={onSubmit}>
        <div>
          <table>
            <tbody>{children}</tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Form;

const FormInfo = css`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    margin-bottom: 20px;
  }

  table {
    width: 1000px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 60px;

    tr {
      height: 52px;
    }

    th {
      width: 240px;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 20px;
      color: #313131;
    }

    td {
      border-bottom: 1px solid #e9e9e9;
      font-size: 14px;
    }

    input {
      border: 1px solid #a1a1a1;
      width: 600px;
      height: 30px;
      font-size: 13px;
      padding-left: 5px;
      color: #313131;
    }

    select {
      border: 1px solid #a1a1a1;
      width: 120px;
      height: 30px;
      color: #313131;
    }

    textarea {
      height: 300px;
    }
  }

  button {
    width: 370px;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }

  img {
    width: 200px;
  }
`;
