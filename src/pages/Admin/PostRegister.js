/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import FormInput from '../../components/FormInput';
import {
  locationLists,
  categories,
  codenames,
  FeeOptions,
} from '../../data/formOptions';
import FileInput from '../../components/FileInput';
import Form from '../../components/Form';
import Button from '../../components/Button';

const PostRegister = () => {
  const [inputs, setInputs] = useState({});
  const imgRef = useRef();

  const {
    category,
    codename,
    title,
    guname,
    place,
    address,
    strtdate,
    end_date,
    use_trgt,
    is_free,
    use_fee,
    org_link,
    player,
    program,
    etc_des,
    // posterUrl
  } = inputs;

  const locationOptions = [...locationLists];

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // 등록 로직을 여기에 구현
    console.log('등록하기');
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div css={detail_form}>
      <h2>게시물 상세</h2>
      <Form>
        <tr>
          <th>등록일</th>
          <td>{formattedDate}</td>
        </tr>
        <FormInput
          label='대분류*'
          name='category'
          value={category}
          type={'select'}
          options={[...categories]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='소분류*'
          name='codename'
          value={codename}
          type={'select'}
          options={[...codenames]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='공연/행사명*'
          name='title'
          value={title}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='자치구*'
          name='guname'
          value={guname}
          type={'select'}
          options={locationOptions}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='장소*'
          name='place'
          value={place}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='상세 주소*'
          name='address'
          value={address}
          onChange={handleChangeInfoInputs}
        />
        <tr>
          <th>기간*</th>
          <td>
            <div css={period}>
              <input
                name='strtdate'
                value={strtdate}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
              ~
              <input
                name='end_date'
                value={end_date}
                type={'date'}
                onChange={handleChangeInfoInputs}
              />
            </div>
          </td>
        </tr>
        <FormInput
          label='이용 대상'
          name='use_trgt'
          value={use_trgt}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='유무료*'
          name='is_free'
          value={is_free}
          type={'select'}
          options={[...FeeOptions]}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='이용 요금*'
          name='use_fee'
          value={use_fee}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='홈페이지 주소'
          name='org_link'
          value={org_link}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='출연자 정보'
          name='player'
          value={player}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='프로그램 소개'
          name='program'
          value={program}
          onChange={handleChangeInfoInputs}
        />
        <FormInput
          label='기타 내용'
          name='etc_des'
          value={etc_des}
          onChange={handleChangeInfoInputs}
        />
        <FileInput
          name='posterUrl'
          value={''}
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

const detail_form = css``;

const period = css`
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

const btn_wrap = css`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 370px;
    margin: 0 10px;
  }
`;
