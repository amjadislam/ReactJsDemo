import axios, { AxiosRequestConfig } from 'axios';
import { IProfileFileParam } from 'modules/params/param.type';
import parseError from 'utils/ErrorParse';

export const BASE_URL = 'http://localhost:3001';

function withAPIKeys(requestConfig?: AxiosRequestConfig) {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return {
      ...requestConfig,
      headers: {
        ...requestConfig?.headers,
        'X-Auth-Token': token ?? 'A',
        'Content-Type': 'application/json',
      },
    };
  }
  return {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      'Content-Type': 'application/json',
    },
  };
}

function withMultipartAPIKeys(requestConfig?: AxiosRequestConfig) {
  const token = localStorage.getItem('accessToken');

  if (token) {
    return {
      ...requestConfig,
      headers: {
        ...requestConfig?.headers,
        'X-Auth-Token': token ?? 'A',
        'Content-Type': 'multipart/form-data',
      },
    };
  }
  return {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      'Content-Type': 'multipart/form-data',
    },
  };
}

export const apiCall = {
  get: (payload: requestType) =>
    axios
      .get(payload.url, withAPIKeys())
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  post: (payload: requestType) =>
    axios
      .post(payload.url, payload.params, withAPIKeys())
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  filePost: (url: string, payload: IProfileFileParam) =>
    axios
      .post(url, payload.params, withMultipartAPIKeys())
      .then((response) => response.data)
      .catch((error) => parseError(error)),
};

export interface requestType {
  url: string;
  isAuthToken: boolean;
  params: any;
}
