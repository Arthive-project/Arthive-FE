import axios from '../lib/axios';

export const getPostById = async (id) => {
  const response = await axios.get(`/cultureInfo/${id}`);
  return response.data.data;
};
