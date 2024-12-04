/* eslint-disable */
import { AXIOS_INVLID_AUTH_EVENT } from '@/utils/constant';
import { emitGlobalEvent } from '@/utils/event-bus';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { configure } from 'axios-hooks';
import { LRUCache } from 'lru-cache';

const handleError = (error: any) => {
  if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  const isAxiosError = axios.isAxiosError(error);
  if (isAxiosError) {
    const axiosError = error as AxiosError;
    if (axiosError.code === 'ERR_NETWORK') {
      return Promise.reject('Network Error. Please refresh the page!');
    }
  }
  const response: AxiosResponse = isAxiosError ? error.response : error;
  if (response) {
    if (response.status === 401) {
      emitGlobalEvent(AXIOS_INVLID_AUTH_EVENT);
    }
    return Promise.reject(response.data);
  }
  return Promise.reject('Unknow error!');
};

const apolloAxios = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apolloAxios.interceptors.request.use((config) => {
  return config;
});

apolloAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return handleError(response);
  },
  (error) => {
    return handleError(error);
  }
);

const cache = new LRUCache<string, number>({ max: 10 });

// TODO: Fix the type issue
configure({ axios: apolloAxios, cache: cache as any });

export default apolloAxios;
