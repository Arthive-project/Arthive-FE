import galleryMock from './gallery-mock.json';

const { galleries } = galleryMock;

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

export function getGalleries(keyword) {
  if (!keyword) return galleries;
  return filterByKeyword(galleries, keyword);
}
