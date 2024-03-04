import axios from '../lib/axios';

export const getPostById = async (id) => {
  const response = await axios.get(`/cultureInfo/${id}`);

  return response.data.data;
};

export const getPostByCategory = async (category) => {
  const response = await axios.get(
    `/cultureInfo/category/${encodeURIComponent(category)}`
  );

  return response.data.data;
};

export const getPostDetailById = async (id) => {
  const response = await axios.get(`/cultureInfo/${id}`);

  return response.data.data;
};
