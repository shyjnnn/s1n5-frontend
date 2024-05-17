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
  // const updateUrl =
  //   'https://s1n5-s3.s3.ap-northeast-2.amazonaws.com/images/bcd6bf23-16df-44ea-8068-217b4b95bff1-test.png?x-amz-acl=public-read&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240517T192735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120000&X-Amz-Credential=AKIA3FLDY7XJLSQCHH5F%2F20240517%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=a9409253f1903fb71e7db9b7a4431b108a99a2e6e1393b4bb3f789d8ffdac784';
  // const resourceUrl =
  //   'https://s1n5-s3.s3.ap-northeast-2.amazonaws.com/images/bcd6bf23-16df-44ea-8068-217b4b95bff1-test.png';

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
