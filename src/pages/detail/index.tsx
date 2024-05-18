import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDiaryDetail } from '@/api/diaryRequest';
import Header from '@/components/common/Header';
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
      <Header leftIcon="backspace" rightIcon="share" />
      <div>
        <ChipDate text={result.dialect} date={result.createdAt} />
        <Title title={result.title} />
        <ContentWrap>{result.originalContent}</ContentWrap>
        <Image src="./svg/line.svg" width={343} height={20} alt="line" />
        <NextTitle>사투리로 변환된 일기</NextTitle>
        <Title title={result.dialect} />
        <Content text={result.dialectContent} img={result.images[0]} />
      </div>
    </Container>
  );
};

export default Detail;

const NextTitle = styled.div`
  height: 19px;
  width: 100%;
  color: #b7b3b3;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Container = styled.div`
  width: 100%;
`;

const ContentWrap = styled.div`
  color: var(--brown-1, #555151);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  padding: 10px 0;
`;
