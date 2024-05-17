/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import { instance } from './instance/instance.apis';
import { CommonResponse } from './instance/instance.types';

/* get 요청 */
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.get<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data.data;
};

// /* post 요청 */
export const postRequest = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.post<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data.data;
};

/* delete 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.delete<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data.data;
};

/* put 요청 */
export const putRequest = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.put<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data.data;
};

/* patch 요청 */
export const patchRequest = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.patch<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data.data;
};
