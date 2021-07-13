import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application',
});

export default api;
