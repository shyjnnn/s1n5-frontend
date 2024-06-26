export interface DiaryRequest {
  city: '제주' | '부산' | '광주' | '평양';
  title: string;
  content: string;
  images: string[];
}

export interface DiaryResponse {
  id: number;
}

export interface GetDiaryResponse {
  id: string;
  title: string;
  originalContent: string;
  dialectContent: string;
  dialect: string;
  images: string[];
  createdAt: string;
  total: number;
}

export interface GetDiariesResponse {
  total: number;
  diaries: GetDiaryResponse[];
}
