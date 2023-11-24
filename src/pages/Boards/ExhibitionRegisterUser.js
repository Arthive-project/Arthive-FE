/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BoardHeader from '../../components/BoardHeader';
import InfoList from '../../components/InfoList';

const INITIAL_INPUT = {
  username: '',
  email: '',
  phoneNumber: '',
  exhibitionTitle: '',
  gallery: '',
  address: '',
  startDate: '',
  endDate: '',
  openTime: '',
  closedTime: '',
  artist: '',
  homePage: '',
  entranceFee: '',
  file: '',
};

const ExhibitionRegisterUser = () => {
  const [inputs, setInputs] = useState(INITIAL_INPUT);

  const {
    username,
    email,
    phoneNumber,
    exhibitionTitle,
    gallery,
    address,
    startDate,
    endDate,
    openTime,
    closedTime,
    artist,
    homePage,
    entranceFee,
    file,
  } = inputs;

  const handleChangeInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <BoardHeader
        text='아타이브 전시 등록 신청'
        showHr={false}
        showText={true}
        subText='전시회 자료를 등록해주셔서 감사합니다.
      등록하신 자료는 전시 등록 지원팀이 확인 후 아타이브 웹페이지에 게재됩니다.'
      />
      <div css={register_wrap}>
        <form css={register_form}>
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
          <section css={form_exhibition_info}>
            <p css={form_title}>2. 전시 정보</p>
            <InfoList
              label={'전시명*'}
              input={{
                name: 'exhibitionTitle',
                value: exhibitionTitle,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'전시 위치 (갤러리명)*'}
              input={{
                name: 'gallery',
                value: gallery,
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
                label={'전시 기간*'}
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
              label={'작가*'}
              input={{
                name: 'artist',
                value: artist,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'전시회 홈페이지'}
              input={{
                name: 'homePage',
                value: homePage,
                onChange: handleChangeInputs,
              }}
            />
            <InfoList
              label={'관람료*'}
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
              label={'전시 포스터 이미지'}
              input={{
                name: 'file',
                value: file,
                type: 'file',
                accept: '.zip',
                onChange: handleChangeInputs,
              }}
              labelSub={true}
              labelSubText='*전시 소개 텍스트 및 추가 이미지는 메일로 보내주세요. (contact@arthive.co.kr)'
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default ExhibitionRegisterUser;

const register_wrap = css`
  border: 1px solid red;
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
const form_exhibition_info = css`
  height: 930px;
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
