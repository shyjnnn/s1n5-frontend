/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDiaries } from '@/api/diaryRequest';
import postUserId from '@/api/userRequest';
import Header from '@/components/common/Header';
import LocalSetting from '@/components/common/LocalSetting';
import ChipDate from '@/components/diaryList/ChipDate';
import Content from '@/components/diaryList/Content';
import CreateBtn from '@/components/diaryList/CreateBtn';
import EmptyDiary from '@/components/diaryList/EmptyDiary';
import Title from '@/components/diaryList/Title';
import { GetDiariesResponse } from '@/types/diary.types';
import getUserId from '@/utils/getUserId';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TotalCountContainer = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: flex-end;
  align-items: end;
  gap: 10px;
`;

const TotalCount = styled.div`
  color: var(--gray-1, #8e8e93);
  /* Caption_12_Regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DiaryContent = styled.div`
  padding: 20px 0;
  cursor: pointer;
`;

const Line = styled.div`
  width: 375px;
  height: 10px;
  background: var(--warm-gray-1, #e5e3df);
  margin-left: -16px;
`;

export default function Home() {
  const [diaries, setDiaries] = useState<GetDiariesResponse | null>(null);
  const [category, setCategory] = useState<string>('전체');

  const router = useRouter();

  useEffect(() => {
    const initializeUserId = async () => {
      let userId = getUserId(); // 로컬 스토리지에서 사용자 ID 가져오기

      if (!userId) {
        const response = await postUserId();
        if (!(response instanceof Error)) {
          userId = response.id;
          localStorage.setItem('userId', userId);
        } else {
          /* empty */
        }
      }
    };

    const fetchDiaries = async () => {
      const response = await getDiaries(category);
      if (response instanceof Error) {
        /* empty */
      } else {
        setDiaries(response);
      }
    };

    initializeUserId().then(fetchDiaries);
  }, [category]);

  const handleClick = () => {
    router.push('/writting');
  };

  if (!diaries || diaries.total === 0) {
    return (
      <>
        <Header leftIcon="logo" rightIcon="setting" />
        <LocalSetting
          total
          title={false}
          local={category}
          setLocal={setCategory}
        />
        <EmptyDiary />
        <Container>
          <CreateBtn onClick={handleClick} />
        </Container>
      </>
    );
  }

  return (
    <>
      <Header leftIcon="logo" rightIcon="setting" />

      {diaries && (
        <>
          <LocalSetting
            total
            title={false}
            local={category}
            setLocal={setCategory}
          />
          <Container>
            <TotalCountContainer>
              <TotalCount>일기 {diaries.total}개</TotalCount>
            </TotalCountContainer>
            {diaries.diaries.map((diary) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div key={diary.id}>
                <DiaryContent
                  onClick={() => {
                    router.push(
                      {
                        pathname: '/detail',
                        query: {
                          id: diary.id,
                        },
                      },
                      '/detail',
                    );
                  }}
                >
                  <ChipDate text={diary.dialect} date={diary.createdAt} />
                  <Title title={diary.dialect} />
                  <Content text={diary.dialectContent} img={diary.images[0]} />
                </DiaryContent>
                <Line />
              </div>
            ))}
            <CreateBtn onClick={handleClick} />
          </Container>
        </>
      )}
    </>
  );
}
