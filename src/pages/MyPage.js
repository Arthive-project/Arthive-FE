/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import BoardHeader from '../components/BoardHeader';
import InfoList from '../components/InfoList';
import Button from '../components/Button';
import { getUserInfoById, updateUserInfoById } from '../api/userAPI';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfoById(1);
      console.log(response);
      setInputs({
        email: response.email,
        name: response.name,
        phoneNumber: response.phoneNumber,
        birthday: response.birthday,
      });
    };
    fetchData();
  }, []);

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    if (isConfirmPhoneNumber) {
      console.log(inputs);
      await updateUserInfoById(1, inputs);
      alert('수정되었습니다.');
    } else {
      alert('변경 사항을 조건에 맞게 입력해주세요.');
      return;
    }
  };

  const [isConfirmPhoneNumber, setIsConfirmPhoneNumber] = useState(false);
  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;
  const validatePhoneNumber = () => PHONE_REGEX.test(inputs.phoneNumber);

  useEffect(() => {
    setIsConfirmPhoneNumber(validatePhoneNumber());
  }, [inputs.phoneNumber]);

  return (
    <div css={my_page}>
      <BoardHeader
        text='회원 정보'
        showHr={false}
        showText={true}
        subText='회원 정보 관리 페이지입니다.'
      />
      <div css={board_btn}>
        <a href={'/my-page'}>
          <div>회원 정보 수정</div>
        </a>
        <a href={'/my-register'}>
          <div>공연/행사 등록신청 내역</div>
        </a>
        <a href={'/my-register'}>
          <div>작성한 리뷰 관리</div>
        </a>
      </div>
      <div css={user_info}>
        <h2>기본 정보</h2>
        <form id='newMyInfo' onSubmit={handleSubmitInfo}>
          <table>
            <tbody>
              <tr>
                <th>이메일</th>
                <td>{inputs.email}</td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <Link to={'/change-password'}>
                    <button css={new_pw}>비밀번호 변경</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{inputs.name}</td>
              </tr>
              <tr>
                <th>휴대폰</th>
                <td>
                  <InfoList
                    input={{
                      name: 'phoneNumber',
                      value: inputs.phoneNumber,
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmPhoneNumber,
                        errorMessage:
                          '형식에 맞춰 입력해주세요. (ex. 010-0000-0000)',
                      },
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>{inputs.birthday}</td>
              </tr>
            </tbody>
          </table>
          <div css={button_wrap}>
            <Button name={'수정하기'} form='newMyInfo' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPage;

const my_page = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
`;

const board_btn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  div {
    border: 1px solid black;
    width: 385px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }

  div:hover {
    background-color: black;
    color: white;
  }
`;

const user_info = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 100px;

  h2 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  table {
    width: 100%;
    height: 450px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 30px;

    th {
      width: 240px;
      height: 50px;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 30px;
    }

    td {
      border-bottom: 1px solid #e9e9e9;
      font-size: 15px;
      color: #3d3d3d;
    }

    input {
      width: 180px;
      height: 32px;
      border: 1px solid #d9d9d9;
      padding: 0 7px;
      margin-right: 10px;
    }
  }
`;

const new_pw = css`
  width: 100px;
  height: 30px;
`;

const button_wrap = css`
  button {
    width: 370px;
    margin: 50px 5px;
  }

  display: flex;
  justify-content: center;
`;
