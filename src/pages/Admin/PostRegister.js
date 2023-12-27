/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import FormInput from '../../components/FormInput';
import { locationLists, codenames, FeeOptions } from '../../data/formOptions';
import FileInput from '../../components/FileInput';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { createPost } from '../../api/adminAPI';
import { useNavigate } from 'react-router-dom';

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const INITIAL_INPUTS = {
  CODENAME: '',
  GUNAME: '',
  TITLE: '',
  PLACE: '',
  ORG_NAME: '',
  DATE: '',
  USE_TRGT: '',
  USE_FEE: '',
  PLAYER: '',
  PROGRAM: '',
  ETC_DESC: '',
  ORG_LINK: '',
  MAIN_IMG: '',
  RGSTDATE: formattedDate,
  TICKET: '',
  STRTDATE: '',
  END_DATE: '',
  THEMECODE: '',
  LOT: '',
  LAT: '',
  IS_FREE: '유료',
  HMPG_ADDR: 'string',
};

const PostRegister = () => {
  const { kakao } = window;
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const [address, setAddress] = useState('');
  const imgRef = useRef();
  const navigate = useNavigate();

  const {
    CODENAME,
    GUNAME,
    TITLE,
    PLACE,
    ORG_NAME,
    DATE,
    USE_TRGT,
    USE_FEE,
    PLAYER,
    PROGRAM,
    ETC_DESC,
    ORG_LINK,
    MAIN_IMG,
    RGSTDATE,
    TICKET,
    STRTDATE,
    END_DATE,
    THEMECODE,
    LOT,
    LAT,
    IS_FREE,
    HMPG_ADDR,
  } = inputs;

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setInputs((prevInputs) => ({
          ...prevInputs,
          LAT: result[0].address.x,
          LOT: result[0].address.y,
        }));
      }
    };

    geocoder.addressSearch(address, callback);
  }, [address]);

  const handleChangeInfoInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      await createPost(inputs);
      alert('등록되었습니다.');
      navigate('/admin/posts');
    } catch (error) {
      alert(`등록에 실패했습니다. ${error.message}`);
    }
  };

  return (
    <div>
      <h2>게시물 상세</h2>
      <Form>
        <tr>
          <th>등록일</th>
          <td name={RGSTDATE}>{formattedDate}</td>
        </tr>
        <FormInput
          label='주제분류*'
          name='CODENAME'
          value={CODENAME}
          type={'select'}
          options={[...codenames]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='공연/행사명*'
          name='TITLE'
          value={TITLE}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='자치구*'
          name='GUNAME'
          value={GUNAME}
          type={'select'}
          options={[...locationLists]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='장소*'
          name='PLACE'
          value={PLACE}
          placeholder={'서울시립미술관'}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='상세 주소*'
          name='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <FormInput
          label='위도*'
          name='LAT'
          value={LAT}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='경도*'
          name='LOT'
          value={LOT}
          onChange={handleChangeInfoInputs}
        />
        <tr>
          <th>기간*</th>
          <td>
            <div css={period}>
              <input
                name='STRTDATE'
                value={STRTDATE}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
              ~
              <input
                name='END_DATE'
                value={END_DATE}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
            </div>
          </td>
        </tr>
        <FormInput
          label='이용 대상'
          name='USE_TRGT'
          value={USE_TRGT}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='유무료*'
          name='IS_FREE'
          value={IS_FREE}
          type={'select'}
          options={[...FeeOptions]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='이용 요금*'
          name='USE_FEE'
          value={USE_FEE}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='홈페이지 주소'
          name='ORG_LINK'
          value={ORG_LINK}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='출연자 정보'
          name='PLAYER'
          value={PLAYER}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='프로그램 소개'
          name='PROGRAM'
          value={PROGRAM}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='기타 내용'
          name='ETC_DESC'
          value={ETC_DESC}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='ORG_NAME'
          name='ORG_NAME'
          value={ORG_NAME}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='TICKET'
          name='TICKET'
          value={TICKET}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='THEMECODE'
          name='THEMECODE'
          value={THEMECODE}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='HMPG_ADDR'
          name='HMPG_ADDR'
          value={HMPG_ADDR}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='DATE'
          name='DATE'
          value={DATE}
          onChange={handleChangeInfoInputs}
        />
        <FileInput
          name='MAIN_IMG'
          value={MAIN_IMG}
          onChange={handleChangeInfoInputs}
          imgRef={imgRef}
        />
      </Form>

      <div css={btn_wrap}>
        <Button name={'등록하기'} onClick={handleRegister} />
      </div>
    </div>
  );
};

export default PostRegister;

const period = css`
  display: flex;
  justify-content: start;
  align-items: center;

  input {
    width: 150px !important;
    margin-right: 10px;
  }
  input:nth-of-type(2) {
    margin-left: 10px;
  }
`;

const btn_wrap = css`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 370px;
    margin: 0 10px;
  }
`;
