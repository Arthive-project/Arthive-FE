/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';
import InfoList from '../../components/InfoList';
import Button from '../../components/Button';
import {
  FeeOptions,
  locationLists,
  categories,
  codenames,
} from '../../data/formOptions';

const INITIAL_INPUT = {
  username: '',
  email: '',
  phoneNumber: '',
  exhibitionTitle: '',
  galleryName: '',
  address: '',
  startDate: '',
  endDate: '',
  openTime: '',
  closedTime: '',
  artist: '',
  homePage: '',
  entranceFee: '',
  file: '',
  area: '중랑구',
  isFree: '유료',
  category: '',
  codename: '',
};

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(INITIAL_INPUT);

  const {
    username,
    email,
    phoneNumber,
    exhibitionTitle,
    galleryName,
    address,
    startDate,
    endDate,
    openTime,
    closedTime,
    artist,
    homePage,
    entranceFee,
    area,
    file,
    isFree,
    category,
    codename,
  } = inputs;

  const handleChangeInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const locationOptions = [...locationLists];
  const isFreeOptions = [...FeeOptions];

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    alert('입력하신 정보로 등록 신청되었습니다.');
    console.log(inputs);
    navigate('/exhibition');
  };

  return (
    <>
      <BoardHeader text='공연/행사 등록 신청' showHr={true} showText={true} />
      <div css={register_wrap}>
        <form
          css={register_form}
          id='exhibitionRegister'
          onSubmit={handleSubmitRegister}
        >
          <section css={form_applicant}>
            <p css={form_title}>1. 신청인 정보</p>
            <InfoList
              label={'성함*'}
              input={{
                name: 'username',
                value: username,
                onChange: handleChangeInputs,
                placeholder: '홍길동',
              }}
            />
            <InfoList
              label={'이메일*'}
              input={{
                name: 'email',
                value: email,
                onChange: handleChangeInputs,
                placeholder: 'arthive@gmail.com',
              }}
            />
            <InfoList
              label={'휴대폰 번호*'}
              input={{
                name: 'phoneNumber',
                value: phoneNumber,
                onChange: handleChangeInputs,
                placeholder: '010-0000-0000',
              }}
            />
          </section>
          <section css={form_info}>
            <p css={form_title}>2. 기본 정보</p>
            <div css={exhibition_period}>
              <InfoList
                label={'카테고리*'}
                input={{
                  name: 'category',
                  value: category,
                  onChange: handleChangeInputs,
                }}
                typeIs={'select'}
                options={[...categories]}
                labelSub={true}
                labelSubText='*대-소분류 카테고리를 모두 선택해주세요.'
              />
              <InfoList
                label={''}
                input={{
                  name: 'codename',
                  value: codename,
                  onChange: handleChangeInputs,
                }}
                typeIs={'select'}
                options={[...codenames]}
              />
            </div>
            <InfoList
              label={'공연/행사명*'}
              input={{
                name: 'exhibitionTitle',
                value: exhibitionTitle,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'자치구*'}
              input={{
                name: 'area',
                value: area,
                onChange: handleChangeInputs,
              }}
              typeIs={'select'}
              options={locationOptions}
            />
            <InfoList
              label={'장소*'}
              input={{
                name: 'galleryName',
                value: galleryName,
                type: 'select',
                onChange: handleChangeInputs,
                placeholder: '예술의 전당 한가람미술관',
              }}
            />
            <InfoList
              label={'전시 주소*'}
              input={{
                name: 'address',
                value: address,
                onChange: handleChangeInputs,
              }}
              labelSub={true}
              labelSubText='*미술관, 갤러리 등 구체적인 장소의 이름과 정확한 주소를 작성해주세요.'
            />
            <div css={exhibition_period}>
              <InfoList
                label={'기간*'}
                input={{
                  name: 'startDate',
                  value: startDate,
                  type: 'date',
                  onChange: handleChangeInputs,
                  placeholder: '오픈 일',
                }}
                labelSub={true}
                labelSubText='*오픈 일 ~ 종료 일'
              />
              <InfoList
                label={''}
                input={{
                  name: 'endDate',
                  value: endDate,
                  type: 'date',
                  onChange: handleChangeInputs,
                  placeholder: '종료 일',
                }}
              />
            </div>
            <div css={exhibition_period}>
              <InfoList
                label={'운영 시간*'}
                input={{
                  name: 'openTime',
                  value: openTime,
                  type: 'time',
                  onChange: handleChangeInputs,
                  placeholder: '00:00 ~ 00:00',
                }}
                labelSub={true}
                labelSubText='*오픈 시간 ~ 종료 시간'
              />
              <InfoList
                label={''}
                input={{
                  name: 'closedTime',
                  value: closedTime,
                  type: 'time',
                  onChange: handleChangeInputs,
                  placeholder: '종료 일',
                }}
              />
            </div>
            <InfoList
              label={'출연자 정보'}
              input={{
                name: 'artist',
                value: artist,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'홈페이지 주소'}
              input={{
                name: 'homePage',
                value: homePage,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'유무료*'}
              input={{
                name: 'isFree',
                value: isFree,
                onChange: handleChangeInputs,
              }}
              typeIs={'select'}
              options={isFreeOptions}
            />
            <InfoList
              label={'이용요금*'}
              input={{
                name: 'entranceFee',
                value: entranceFee,
                onChange: handleChangeInputs,
              }}
              labelSub={true}
              labelSubText='*성인 1명, 미할인 기준의 관람료를 작성해주세요. (무료인 경우 0으로 작성)'
            />
          </section>
          <section css={form_file}>
            <p css={form_title}>3. 첨부 파일</p>
            <InfoList
              label={'포스터 이미지'}
              input={{
                name: 'file',
                value: file,
                type: 'file',
                accept: 'img/*',
                onChange: handleChangeInputs,
              }}
              labelSub={true}
              labelSubText='*전시 소개 텍스트 및 추가 이미지는 메일로 보내주세요. (contact@arthive.co.kr)'
            />
          </section>
          <Button name='신청하기' type='submit' form='exhibitionRegister' />
        </form>
      </div>
    </>
  );
};

export default ApplicationFormPage;

const register_wrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const register_form = css`
  margin-bottom: 180px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 507px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    margin-bottom: 32px;
    padding: 0 35px;
  }
`;

const form_applicant = css`
  height: 410px;
`;

const form_info = css`
  height: 1200px;
`;

const exhibition_period = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const form_file = css`
  height: 330px;
`;

const form_title = css`
  margin: 45px;
  font-size: 17px;
`;
