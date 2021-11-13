import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios';

import {BASE_URL, TIMEOUT} from './const';

import {getToken} from './services/token';


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

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
}


export {createAPI};
