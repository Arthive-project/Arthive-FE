import axios from '../lib/axios';

interface Post {
  id?: string;
}

interface User {
  id?: string;
}

interface ApiResponse<T> {
  data: T;
}

export const getOpenApi = async (): Promise<ApiResponse<any>> => {
  const result = await axios.get<ApiResponse<any>>('/cultureInfo/openapi');
  return result.data;
};

export const getListAllPosts = async (): Promise<ApiResponse<Post[]>> => {
  const result = await axios.get<ApiResponse<Post[]>>('/cultureInfo');
  return result.data;
};

export const createPost = async (
  postData: Post
): Promise<ApiResponse<Post>> => {
  const result = await axios.post<ApiResponse<Post>>('/cultureInfo', postData);
  return result.data;
};

export const updatePost = async (
  postId: string,
  postData: Post
): Promise<ApiResponse<Post>> => {
  const response = await axios.put<ApiResponse<Post>>(
    `/cultureInfo/${postId}`,
    postData
  );
  return response.data;
};

export const deletePost = async (postId: string): Promise<ApiResponse<any>> => {
  const response = await axios.delete<ApiResponse<any>>(
    `/cultureInfo/${postId}`
  );
  return response.data;
};

export const getListAllUsers = async (): Promise<ApiResponse<User[]>> => {
  const response = await axios.get<ApiResponse<User[]>>('/user');
  return response.data;
};
