import galleryMock from './gallery-mock.json';
import exhibitionMock from './exhibition-mock.json';
import myRegisterMock from './myRegister-mock.json';

const { galleries } = galleryMock;
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

// 게시판 아이템 리스트
export function getGalleries(keyword) {
  if (!keyword) return galleries;
  return filterByKeyword(galleries, keyword);
}

export function getExhibitions(keyword) {
  if (!keyword) return exhibitions;
  return filterByKeyword(exhibitions, keyword);
}

// 디테일 페이지
export function getGalleryById(galleryId) {
  return galleries.find((gallery) => gallery.id === galleryId);
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
