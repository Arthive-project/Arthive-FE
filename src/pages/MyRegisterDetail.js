/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { getMyRegisterById } from '../api';
import { locationLists } from '../data/formOptions';
import BoardHeader from '../components/BoardHeader';
import FormInput from '../components/FormInput';
import Form from '../components/Form';
import Button from '../components/Button';
import FileInput from '../components/FileInput';

const MyRegisterDetail = () => {
  // TODO: 등록 완료 게시물일 경우 수정 불가
  // TODO: 필수 입력란 alert

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
    openTime,
    closedTime,
    closedDay,
    artist,
    entranceFee,
    gallerySiteUrl,
    // posterUrl,
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
      <BoardHeader text='전시 등록 신청 내역' />
      <Form buttonName='수정하기' formId='myRegisterDetail'>
        <tr>
          <th>신청 일시</th>
          <td>{register.registerDay}</td>
        </tr>
        <FormInput
          label='전시명'
          name='title'
          value={title}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='작가'
          name='artist'
          value={artist}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='전시 위치 (갤러리명)'
          name='galleryName'
          value={galleryName}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='전시 주소'
          name='address'
          value={address}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='지역'
          name='area'
          value={area}
          type={'select'}
          options={locationOptions}
          onChange={handleChangeInfoInputs}
        />
        <tr>
          <th>전시 기간</th>
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
        <tr>
          <th>운영 시간</th>
          <td>
            <div css={exhibition_period}>
              <input
                name='openTime'
                value={openTime}
                type={'time'}
                onChange={handleChangeInfoInputs}
              />
              ~
              <input
                name='closedTime'
                value={closedTime}
                type={'time'}
                onChange={handleChangeInfoInputs}
              />
            </div>
          </td>
        </tr>
        <FormInput
          label='휴관일'
          name='closedDay'
          value={closedDay}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='관람료'
          name='entranceFee'
          value={entranceFee}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='전시회 홈페이지'
          name='gallerySiteUrl'
          value={gallerySiteUrl}
          onChange={handleChangeInfoInputs}
        />
        {/* <FormInput
          label='포스터 이미지'
          name='file'
          value={file}
          onChange={handleChangeInfoInputs}
        /> */}
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
    margin-left: 10px; // 두 번째 input에만 margin을 주어 간격을 조절합니다.
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
