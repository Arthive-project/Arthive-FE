import exhibitionMock from './exhibition-mock.json';
import myRegisterMock from './myRegister-mock.json';
import allPostsMock from './admin-posts-mock.json';
import allApplicationsMock from './admin-application-mock.json';

interface Exhibition {
  id: string;
  title?: string;
  gallery?: string;
  galleryName?: string;
  location?: string;
  artist?: string;
  artistName?: string;
  artistEn?: string;
  address?: string;
  field?: string;
  country?: string;
  [key: string]: string | undefined;
}

interface MyRegister {
  id: string;
}

interface Post {
  id: string;
}

interface Application {
  id: string;
}

const { exhibitions } = exhibitionMock as { exhibitions: Exhibition[] };
const { myRegisters } = myRegisterMock as { myRegisters: MyRegister[] };
const { allPosts } = allPostsMock as { allPosts: Post[] };
const { allApplications } = allApplicationsMock as {
  allApplications: Application[];
};

function filterByKeyword(items: Exhibition[], keyword: string): Exhibition[] {
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

export function getDetailByCategory(
  category: string,
  itemId: string
): Exhibition | undefined {
  switch (category) {
    case 'theater':
      return getTheaterById(itemId);
    case 'exhibition':
      return getExhibitionById(itemId);
    default:
      return undefined;
  }
}

export function getExhibitions(keyword: string | undefined): Exhibition[] {
  if (!keyword) return exhibitions;
  return filterByKeyword(exhibitions, keyword);
}

export function getTheaterById(theaterId: string): Exhibition | undefined {
  return exhibitions.find((theater) => theater.id === theaterId);
}

export function getExhibitionById(
  exhibitionId: string
): Exhibition | undefined {
  return exhibitions.find((exhibition) => exhibition.id === exhibitionId);
}

export function getMyRegisters(): MyRegister[] {
  return myRegisters;
}

export function getMyRegisterById(registerId: string): MyRegister | undefined {
  return myRegisters.find((register) => register.id === registerId);
}

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getAllPostsById(postId: string): Post | undefined {
  return allPosts.find((post) => post.id === postId);
}

export function getAllApplications(): Application[] {
  return allApplications;
}

export function getApplicationById(
  applicationId: string
): Application | undefined {
  return allApplications.find(
    (application) => application.id === applicationId
  );
}
