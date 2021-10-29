import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

const BASE_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

type UnauthorizedCb = () => void;

function createAPI(onUnauthorized: UnauthorizedCb): AxiosInstance {

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });


  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {

      if (error.response?.status === 401) {
        return onUnauthorized();
      }
      return Promise.reject(error);
    },
  );

  return api;
}


export {createAPI};
