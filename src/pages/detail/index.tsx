import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDiaryDetail } from '@/api/diaryRequest';
import ChipDate from '@/components/diaryList/ChipDate';
import Content from '@/components/diaryList/Content';
import Title from '@/components/diaryList/Title';
import { GetDiaryResponse } from '@/types/diary.types';

const Detail = () => {
  const [result, setResult] = useState<GetDiaryResponse>({
    id: '',
    title: '',
    originalContent: '',
    dialectContent: '',
    dialect: '',
    images: [''],
    createdAt: '',
    total: 0,
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const data = await getDiaryDetail(String(id));
      if (data instanceof Error) return;
      setResult(data);
    };
    getData();
  }, []);

  return (
    <Container>
      <div>
        <ChipDate text={result.dialect} date={result.createdAt} />
        <Title title={result.dialect} />
        <Content text={result.dialectContent} img={result.images[0]} />
      </div>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
`;
