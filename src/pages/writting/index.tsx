import { NextPage } from 'next';
import { useState } from 'react';

import { postDiary } from '@/api/diaryRequest';
import BottomBtn from '@/components/common/BottomBtn';
import Header from '@/components/common/Header';
import LocalSetting from '@/components/common/LocalSetting';
import ImageUpload from '@/components/imageUpload';
import DiaryContent from '@/components/writting/DiaryContent';
import DiaryTitle from '@/components/writting/DiaryTitle';

const Writting: NextPage = () => {
  const [local, setLocal] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [diary, setDiary] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleOnClick = () => {
    if (local.length === 0) return;
    if (
      local === '제주' ||
      local === '부산' ||
      local === '평양' ||
      local === '광주'
    ) {
      postDiary({
        city: local,
        title,
        content: diary,
        images: imgUrl ? [imgUrl] : [],
      });
    }
  };

  return (
    <>
      <Header leftIcon="backspace" title="일기 쓰기" />
      <LocalSetting total={false} title local={local} setLocal={setLocal} />
      <DiaryTitle title={title} setTitle={setTitle} />
      <DiaryContent diary={diary} setDiary={setDiary} />
      <ImageUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <BottomBtn
        text="등록하기"
        state={
          local.length > 0 && title.length > 0 && diary.length > 0
            ? 'activated'
            : 'disabled'
        }
        onClick={handleOnClick}
      />
    </>
  );
};

export default Writting;
