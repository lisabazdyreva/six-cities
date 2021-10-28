import axios, {AxiosError, AxiosInstance} from 'axios';

const BASE_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

function createAPI(): AxiosInstance {

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return api;
}


export {createAPI};
