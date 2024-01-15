import axios from '../lib/axios';

export const getOpenApi = async () => {
  const result = await axios.get('/cultureInfo/openapi');

  return result.data.data;
};

export const getListAllPosts = async () => {
  const result = await axios.get('/cultureInfo');

  return result.data.data;
};

export const createPost = async (postData) => {
  const result = await axios.post('/cultureInfo', postData);

  return result.data.data;
};

export const updatePost = async (postId, postData) => {
  const response = await axios.put(`/cultureInfo/${postId}`, postData);

  return response.data.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`/cultureInfo/${postId}`);

  return response.data;
};

export const getListAllUsers = async () => {
  const response = await axios.get('/user');

  return response.data.data;
};
