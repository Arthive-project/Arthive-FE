/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import BoardHeader from '../components/BoardHeader';
import InfoList from '../components/InfoList';
import Button from '../components/Button';
import { getUserInfoById, updateUserInfoById } from '../api/userAPI';

const MyPageChangePw = () => {
  const [inputs, setInputs] = useState({
    curPassword: '',
    newPwd: '',
    checkNewPwd: '',
  });
  const [pw, setPw] = useState({
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfoById(1);
      console.log(response);
      setInputs({
        curPassword: response.password,
      });
      setPw({
        password: response.password,
      });
    };
    fetchData();
  }, []);

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setPw({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    if (isConfirmPwd && isConfirmCheckPwd) {
      console.log(pw);
      await updateUserInfoById(1, pw);
      alert('수정되었습니다.');
    } else {
      alert('변경 사항을 조건에 맞게 입력해주세요.');
      return;
    }
  };

  // 유효성 검사
  const [isConfirmPwd, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPwd, setIsConfirmCheckPassword] = useState(false);

  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  const validatePassword = () => PWD_REGEX.test(inputs.newPwd);
  const validateCheckPassword = () =>
    inputs.checkNewPwd === inputs.newPwd || inputs.newPwd.length === 0;

  useEffect(() => {
    setIsConfirmPassword(validatePassword());
  }, [inputs.newPwd]);

  useEffect(() => {
    setIsConfirmCheckPassword(validateCheckPassword());
  }, [inputs.checkNewPwd]);

  return (
    <div css={my_page}>
      <BoardHeader
        text='비밀번호 변경'
        showHr={false}
        showText={true}
        subText='안전한 비밀번호로 내정보를 보호하세요.'
      />
      <div css={user_info}>
        <h2>비밀번호 변경</h2>
        <form id='newMyInfo' onSubmit={handleSubmitInfo}>
          <table>
            <tbody>
              <tr>
                <th>비밀번호</th>
                <td>
                  <InfoList
                    label={'현재 비밀번호'}
                    input={{
                      name: 'currentPwd',
                      value: inputs.currentPwd,
                      type: 'password',
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmPwd,
                        errorMessage:
                          '영문, 숫자, 특수문자 포함 8~20자 사이로 입력해주세요.',
                      },
                    }}
                  />
                  <InfoList
                    label={'새 비밀번호'}
                    input={{
                      name: 'newPwd',
                      value: inputs.newPwd,
                      type: 'password',
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmPwd,
                        errorMessage:
                          '영문, 숫자, 특수문자 포함 8~20자 사이로 입력해주세요.',
                      },
                    }}
                  />
                  <InfoList
                    label={'비밀번호 확인'}
                    input={{
                      name: 'checkNewPwd',
                      value: inputs.checkNewPwd,
                      type: 'password',
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmCheckPwd,
                        errorMessage: '비밀번호가 일치하지 않습니다.',
                      },
                    }}
                  />
                </td>
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

export default MyPageChangePw;

const my_page = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
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

const button_wrap = css`
  button {
    width: 370px;
    margin: 50px 5px;
  }

  display: flex;
  justify-content: center;
`;
