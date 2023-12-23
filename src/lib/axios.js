import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.37.108.23:8000/api/v1',
});

export default instance;
