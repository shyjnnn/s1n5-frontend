import axios from 'axios';

import { PresingedUrlResponse } from '@/types/image.types';

import { postRequest } from './common.api';

/**
 * Presigned URL 생성 api
 * 
 * @example 
 *  ```
 *  const presignedURL = await createPresignedURL('eva-shop')
    ```
 * @param name : 이미지 title (string)
 * @returns void
 * 
 */
const createPresignedURL = async (
  name: string,
): Promise<{ resourceUrl: string; updateUrl: string } | Error> => {
  try {
    const response = await postRequest<PresingedUrlResponse>('/images', {
      name,
    });
    const { resourceUrl } = response;
    const { updateUrl } = response;

    return { resourceUrl, updateUrl };
  } catch (error) {
    return error as Error;
  }
};

/**
 * S3로 이미지 업로드 api
 * 
 * @example 
 *  ```
    ```
 * @param presignedURL : presignedURL url (string)
 * @param file : 이미지 file (File)
 * @returns void
 * 
 */
const uploadImageToS3 = async (
  url: string,
  file: File,
): Promise<number | Error> => {
  try {
    const response = await axios.put(url, file, {
      headers: {
        'Content-Type': 'image/png', // Content-Type을 image/png로 설정
      },
    });
    return response.status;
  } catch (error) {
    return error as Error;
  }
};

/**
 * 이미지 업로드 total api
 * 
 * @example 
 * const presignedUrl = await uploadImage(file)
 * 
 * @example 에러처리
 *     if (response instanceof Error) {
        // 알 수 없는 에러 처리 
      }  else { // 성공시
        // presigndUrl string 반환
      }
 *  ```
    ```
 * @param name 
 * 
 */
const uploadImage = async (file: File): Promise<string | Error> => {
  const results = await createPresignedURL(file.name);
  if (results instanceof Error || !results) return results;
  const { resourceUrl, updateUrl } = results;

  const uploadStatus = await uploadImageToS3(updateUrl, file);

  if (
    uploadStatus instanceof Error ||
    !(uploadStatus >= 200 && uploadStatus < 300)
  ) {
    return new Error();
  }

  return resourceUrl;
};

export default uploadImage;
