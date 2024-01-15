/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import FormInput from '../../components/FormInput';
import { locationLists, codenames, FeeOptions } from '../../data/formOptions';
import FileInput from '../../components/FileInput';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { getPostById } from '../../api/requestAPI';
import { deletePost, updatePost } from '../../api/adminAPI';
import { INITIAL_INPUTS } from '../../data/initialInputs';

const PostsDetail = () => {
  const { postId } = useParams();
  const { kakao } = window;
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const [address, setAddress] = useState('');
  const [originalInputs, setOriginalInputs] = useState({});
  const imgRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(postId);
      setInputs(response);
      setOriginalInputs(response);
    };
    fetchData();
  }, []);

  const {
    CODENAME,
    GUNAME,
    TITLE,
    PLACE,
    DATE,
    USE_TRGT,
    USE_FEE,
    PLAYER,
    PROGRAM,
    ETC_DESC,
    ORG_LINK,
    MAIN_IMG,
    RGSTDATE,
    STRTDATE,
    END_DATE,
    LOT,
    LAT,
    IS_FREE,
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

    if (address) {
      geocoder.addressSearch(address, callback);
    }
  }, [address]);

  const handleChangeInfoInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const findModifiedData = () => {
    const modifiedData = {};
    Object.keys(inputs).forEach((key) => {
      if (
        inputs[key] !== null &&
        inputs[key] !== undefined &&
        inputs[key] !== originalInputs[key]
      ) {
        modifiedData[key] = inputs[key];
      }
    });
    return modifiedData;
  };

  const handleUpdate = async () => {
    try {
      if (confirm('해당 게시물을 수정하시겠습니까?')) {
        const modifiedData = findModifiedData();
        await updatePost(postId, modifiedData);
        alert('게시물이 수정되었습니다.');
        navigate('/admin/posts');
      }
    } catch (error) {
      alert(`게시물 수정에 실패했습니다. ${error.message}`);
    }
  };

  const handleDelete = async () => {
    try {
      if (confirm('해당 게시물을 삭제하시겠습니까?')) {
        await deletePost(postId);
        alert('게시물이 삭제되었습니다.');
        navigate('/admin/posts');
      }
    } catch (error) {
      alert(`게시물 삭제에 실패했습니다. ${error.message}`);
    }
  };

  return (
    <div css={detail_form}>
      <h2>게시물 상세</h2>
      <Form>
        <tr>
          <th>등록일</th>
          <td>{RGSTDATE}</td>
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
        <Button name={'수정하기'} onClick={handleUpdate} />
        <Button name={'삭제하기'} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default PostsDetail;

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
