import { useEffect, useState } from 'react';

import { getDiaries } from '@/api/diaryRequest';
import postUserId from '@/api/userRequest';
import Content from '@/components/diaryList/Content';
import Title from '@/components/diaryList/Title';
import { GetDiariesResponse } from '@/types/diary.types';
import getUserId from '@/utils/getUserId';

export default function Home() {
  const [diaries, setDiaries] = useState<GetDiariesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeUserId = async () => {
      let userId = getUserId(); // 로컬 스토리지에서 사용자 ID 가져오기
      if (!userId) {
        const response = await postUserId();
        if (!(response instanceof Error)) {
          userId = response.id;
        } else {
          setError('Failed to create user ID');
        }
      }
    };

    const fetchDiaries = async () => {
      const response = await getDiaries();
      if (response instanceof Error) {
        setError('Failed to load diaries');
      } else {
        setDiaries(response);
      }
    };

    initializeUserId().then(fetchDiaries);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!diaries) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {diaries.diaries.map((diary) => (
        <div key={diary.id}>
          <Title title={diary.dialect} />
          <Content text={diary.originalContent} img={diary.images[0]} />
        </div>
      ))}
    </>
  );
}
