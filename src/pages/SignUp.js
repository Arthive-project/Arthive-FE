/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoList from '../components/InfoList';
import Button from '../components/Button';

const SIGN_UP_INPUTS = {
  emailAddress: '',
  name: '',
  phoneNumber: '',
  password: '',
};

const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const PWD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

const SignUp = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(SIGN_UP_INPUTS);

  const { emailAddress, name, phoneNumber, password } = inputs;
  const [checkPassword, setCheckPassword] = useState('');

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 유효성 검사
  const [isConfirmEmail, setIsConfirmEmail] = useState(true);
  const [isConfirmName, setIsConfirmName] = useState(true);
  const [isConfirmPhoneNumber, setIsConfirmPhoneNumber] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPassword, setIsConfirmCheckPassword] = useState(false);

  // 각 유효성 검사 함수
  const validateEmail = () => EMAIL_REGEX.test(emailAddress);
  const validateName = () => name.length > 1;
  const validatePhoneNumber = () => PHONE_REGEX.test(phoneNumber);
  const validatePassword = () => PWD_REGEX.test(password);
  const validateCheckPassword = () =>
    checkPassword === password || checkPassword.length === 0;

  // 이메일 유효성 검사, 중복검사
  useEffect(() => {
    setIsConfirmEmail(validateEmail());
  }, [emailAddress, validateEmail]);

  // 이름 유효성 검사
  useEffect(() => {
    setIsConfirmName(validateName());
  }, [name, validateName]);

  // 휴대전화 유효성 검사
  useEffect(() => {
    setIsConfirmPhoneNumber(validatePhoneNumber());
  }, [phoneNumber, validatePhoneNumber]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    setIsConfirmPassword(validatePassword());
  }, [password, checkPassword, validatePassword]);

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    setIsConfirmCheckPassword(validateCheckPassword());
  }, [password, checkPassword, validateCheckPassword]);

  const handleChangeCheckPassword = (e) => {
    setCheckPassword(e.currentTarget.value);
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    navigate('/login');
    console.log(inputs);
  };

  return (
    <div css={signup}>
      <div css={signup_wrap}>
        <p css={signup_title}>회원가입</p>
        <form id='signup' onSubmit={handleSubmitSignUp}>
          <InfoList
            label={'이메일'}
            input={{
              name: 'emailAddress',
              value: emailAddress,
              onChange: handleChangeInfoInputs,
              placeholder: 'arthive2023@gmail.com',
              checkInput: {
                isConfirm: isConfirmEmail,
                errorMessage:
                  '형식에 맞춰 입력해주세요. (ex. arthive@gmail.com)',
              },
            }}
          />
          <InfoList
            label={'성함'}
            input={{
              name: 'name',
              value: name,
              onChange: handleChangeInfoInputs,
              placeholder: '홍길동',
              checkInput: {
                isConfirm: isConfirmName,
                errorMessage: '이름을 정확히 입력해주세요. (ex. 홍길동)',
              },
            }}
          />
          <InfoList
            label={'휴대전화'}
            input={{
              name: 'phoneNumber',
              value: phoneNumber,
              placeholder: '010-0000-0000',
              onChange: handleChangeInfoInputs,
              checkInput: {
                isConfirm: isConfirmPhoneNumber,
                errorMessage: '형식에 맞춰 입력해주세요. (ex. 010-0000-0000)',
              },
            }}
          />
          <InfoList
            label={'비밀번호'}
            input={{
              name: 'password',
              value: password,
              type: 'password',
              onChange: handleChangeInfoInputs,
              placeholder: '비밀번호 (영문, 숫자, 특수문자 포함 8~20자)',
              checkInput: {
                isConfirm: isConfirmPassword,
                errorMessage:
                  '영문, 숫자, 특수문자 포함 8~20자 사이로 입력해주세요.',
              },
            }}
          />
          <InfoList
            label={'비밀번호 확인'}
            input={{
              name: 'checkPassword',
              value: checkPassword,
              type: 'password',
              onChange: handleChangeCheckPassword,
              placeholder: '',
              checkInput: {
                isConfirm: isConfirmCheckPassword,
                errorMessage: '비밀번호가 일치하지 않습니다.',
              },
            }}
          />
          <section>
            <Button name='가입하기' form='signUp' type='submit' />
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

const signup = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fbfbfb;
  padding: 120px 0 190px;
`;

const signup_wrap = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  width: 457px;
  border-radius: 30px;
  background-color: white;
  margin: 0 auto;
  padding: 50px 35px;
  overflow: scroll;
`;

const signup_title = css`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 50px;
`;
