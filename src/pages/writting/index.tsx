import { NextPage } from 'next';
import { useState } from 'react';

import BottomBtn from '@/components/common/BottomBtn';
import Header from '@/components/common/Header';
import LocalSetting from '@/components/common/LocalSetting';
import ImageUpload from '@/components/imageUpload';
import DiaryContent from '@/components/writting/DiaryContent';
import DiaryTitle from '@/components/writting/DiaryTitle';

const Writting: NextPage = () => {
  const [local, setLocal] = useState<string>('');
  return (
    <>
      <Header leftIcon="backspace" title="일기 쓰기" />
      <LocalSetting title local={local} setLocal={setLocal} />
      <DiaryTitle />
      <DiaryContent />
      <ImageUpload />
      <BottomBtn text="등록하기" state="disabled" onClick={() => {}} />
    </>
  );
};

export default Writting;
