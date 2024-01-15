/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { getMyRegisterById } from '../api';
import {
  locationLists,
  categories,
  codenames,
  FeeOptions,
} from '../data/formOptions';
import BoardHeader from '../components/BoardHeader';
import FormInput from '../components/FormInput';
import Form from '../components/Form';
import Button from '../components/Button';
import FileInput from '../components/FileInput';

const MyRegisterDetail = () => {
  const { registerId } = useParams();
  const register = getMyRegisterById(registerId);
  const [inputs, setInputs] = useState(register);
  const imgRef = useRef();

  const locationOptions = [...locationLists];

  const {
    title,
    galleryName,
    area,
    address,
    startDate,
    endDate,
    artist,
    gallerySiteUrl,
    category,
    codename,
    Fee,
    entranceFee,
  } = inputs;

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div css={my_register_detail}>
      <BoardHeader text='공연/행사 등록 신청 내역' />
      <Form buttonName='수정하기' formId='myRegisterDetail'>
        <tr>
          <th>신청 일시</th>
          <td>{register.registerDay}</td>
        </tr>
        <tr>
          <th>신청자</th>
          <td>{register.applicant}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>{register.email}</td>
        </tr>
        <FormInput
          label='대분류'
          name='category'
          value={category}
          type={'select'}
          options={[...categories]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='소분류'
          name='codename'
          value={codename}
          type={'select'}
          options={[...codenames]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='공연/행사명'
          name='title'
          value={title}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='자치구'
          name='area'
          value={area}
          type={'select'}
          options={locationOptions}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='장소'
          name='galleryName'
          value={galleryName}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='상세 주소'
          name='address'
          value={address}
          onChange={handleChangeInfoInputs}
        />
        <tr>
          <th>기간</th>
          <td>
            <div css={exhibition_period}>
              <input
                name='startDate'
                value={startDate}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
              ~
              <input
                name='endDate'
                value={endDate}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
            </div>
          </td>
        </tr>
        <FormInput
          label='출연자 정보'
          name='artist'
          value={artist}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='홈페이지 주소'
          name='gallerySiteUrl'
          value={gallerySiteUrl}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='유무료'
          name='Fee'
          value={Fee}
          type={'select'}
          options={[...FeeOptions]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='이용 요금'
          name='entranceFee'
          value={entranceFee}
          onChange={handleChangeInfoInputs}
        />
        <FileInput
          name='posterUrl'
          value={''}
          onChange={handleChangeInfoInputs}
          imgRef={imgRef}
        />
      </Form>

      {register.status === '검토중' ? (
        <div css={buttonWrap}>
          <Button name={'저장하기'} form='myRegisterDetail' type='submit' />
        </div>
      ) : (
        <div css={buttonWrap}>
          <Button name={'확인'} form='myRegisterDetail' type='submit' />
        </div>
      )}
    </div>
  );
};

export default MyRegisterDetail;

const my_register_detail = css`
  width: 1160px;
  margin: 0 auto;
`;

const exhibition_period = css`
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

const buttonWrap = css`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  button {
    width: 370px;
  }
`;
