import {
  DiaryRequest,
  DiaryResponse,
  GetDiariesResponse,
  GetDiaryResponse,
} from '@/types/diary.types';

import { getRequest, postRequest } from './common.api';

const postDiary = async ({
  city,
  title,
  content,
  images,
}: DiaryRequest): Promise<DiaryResponse | Error> => {
  try {
    const response = await postRequest<DiaryResponse>('/diary', {
      city,
      title,
      content,
      images,
    });

    return response;
  } catch (error) {
    return error as Error;
  }
};

const getDiaryDetail = async (
  diaryId: string,
): Promise<GetDiaryResponse | Error> => {
  try {
    const response = await getRequest<GetDiaryResponse>(`/diary/${diaryId}`);
    return response;
  } catch (error) {
    return error as Error;
  }
};

const getDiaries = async (): Promise<GetDiariesResponse | Error> => {
  try {
    const response = await getRequest<GetDiariesResponse>('/diary');
    return response;
  } catch (error) {
    return error as Error;
  }
};

export { postDiary, getDiaryDetail, getDiaries };
