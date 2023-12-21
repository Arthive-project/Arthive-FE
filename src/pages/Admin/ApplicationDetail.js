/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { getApplicationById } from '../../api';
import { useEffect, useState, useRef } from 'react';
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

const ApplicationDetail = () => {
  const { applicationId } = useParams();
  const [inputs, setInputs] = useState({});
  const imgRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApplicationById(applicationId);
      setInputs(response);
    };
    fetchData();
    console.log(inputs);
  }, [inputs]);

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

  const handleUpdate = () => {
    // TODO 등록 로직 구현
    console.log('등록하기');
  };

  const handleDelete = () => {
    // TODO 삭제 로직 구현
    console.log('삭제하기');
  };

  return (
    <div css={detail_form}>
      <h2>게시물 상세</h2>
      <Form>
        <tr>
          <th>신청일</th>
          <td>{inputs.application_date}</td>
        </tr>
        <tr>
          <th>신청자</th>
          <td>{inputs.applicant}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>{inputs.email}</td>
        </tr>
        <tr>
          <th>현황</th>
          <td>{inputs.status}</td>
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
        <Button name={'등록하기'} onClick={handleUpdate} />
        <Button name={'삭제하기'} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ApplicationDetail;

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
