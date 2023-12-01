import exhibitionMock from './exhibition-mock.json';
import myRegisterMock from './myRegister-mock.json';

const { exhibitions } = exhibitionMock;
const { myRegisters } = myRegisterMock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  const fields = [
    'title',
    'gallery',
    'galleryName',
    'location',
    'artist',
    'artistName',
    'artistEn',
    'address',
    'field',
    'country',
  ];

  return items.filter((item) =>
    fields.some((field) => item[field]?.toLowerCase().includes(lowered))
  );
}

export function getDetailByCategory(category, itemId) {
  switch (category) {
    case 'theater':
      return getTheaterById(itemId);
    case 'exhibition':
      return getExhibitionById(itemId);
    default:
      return null;
  }
}

// 게시판 아이템 리스트
export function getExhibitions(keyword) {
  if (!keyword) return exhibitions;
  return filterByKeyword(exhibitions, keyword);
}

// 디테일 페이지
export function getTheaterById(theaterId) {
  return exhibitions.find((theater) => theater.id === theaterId);
}

export function getExhibitionById(exhibitionId) {
  return exhibitions.find((exhibition) => exhibition.id === exhibitionId);
}

// 마이페이지 - 전시 등록 신청 내역
export function getMyRegisters() {
  return myRegisters;
}

// 마이페이지 - 전시 등록 신청 내역 - 디테일 페이지
export function getMyRegisterById(registerId) {
  return myRegisters.find((register) => register.id === registerId);
}
