/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import InfoList from '../components/InfoList';
import Button from '../components/Button';
import { getUserInfo, requestLogin } from '../api/userAPI';
import { TokenAtom } from '../recoil/TokenAtom';
import { getCookie, setCookie } from '../util/cookie';
import { isAdminState } from '../recoil/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPw] = useState('');
  const setAccessToken = useSetRecoilState(TokenAtom);
  const setAdmin = useSetRecoilState(isAdminState);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/';

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const result = await requestLogin(email, password);

    if (result) {
      const { accessToken, refreshToken } = result;
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
      setAccessToken(accessToken);
      const userEmail = await getUserInfo();

      if (userEmail === 'admin123@arthive.com') {
        setAdmin(true);
        navigate('/admin');
      } else {
        navigate(from);
      }
    }
  };

  useEffect(() => {
    const checkAccessToken = async () => {
      if (getCookie('accessToken')) {
        const userEmail = await getUserInfo();

        if (userEmail === 'admin123@arthive.com') {
          setAdmin(true);
          navigate('/admin');
        } else {
          alert('잘못된 접근입니다.');
          navigate('/');
        }
      }
    };

    checkAccessToken();
  }, [navigate, setAdmin]);

  return (
    <div css={login}>
      <div css={login_wrap}>
        <p css={login_title}>로그인</p>
        <form id='login' onSubmit={handleSubmitLogin}>
          <InfoList
            label={'이메일'}
            input={{
              name: 'email',
              value: email,
              onChange: onChangeEmail,
              placeholder: 'arthive2023@gmail.com',
            }}
          />
          <InfoList
            label={'비밀번호'}
            input={{
              name: 'password',
              value: password,
              type: 'password',
              onChange: onChangePw,
            }}
          />
          <Button name='로그인' form='login' type='submit' />
        </form>
        <section>
          <Link to='/sign-up' css={link_signup}>
            회원가입
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;

const login = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fbfbfb;
  padding: 120px 0 190px;
`;

const login_wrap = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  width: 457px;
  height: 480px;
  border-radius: 30px;
  background-color: white;
  margin: 70px auto 0 auto;
  padding: 50px 35px;
  overflow: scroll;
`;

const login_title = css`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const link_signup = css`
  float: right;
  text-decoration: none;
  color: #3c3c3c;
  font-size: 14px;
  margin: 10px 5px;
`;
