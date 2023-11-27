import { useParams } from 'react-router-dom';
import { getMyRegisterById } from '../api';

const MyRegisterDetail = () => {
  const { registerId } = useParams();
  const register = getMyRegisterById(registerId);

  return <h1>유저의 전시 등록 신청 내역 상세페이지 {register.id}</h1>;
};

export default MyRegisterDetail;
