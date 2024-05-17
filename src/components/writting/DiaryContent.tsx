import styled from 'styled-components';

import ContentTitle from '../common/ContentTitle';

interface Props {
  diary: string;
  setDiary: (value: string) => void;
}

const DiaryContent = (props: Props) => {
  const { diary, setDiary } = props;
  return (
    <>
      <ContentTitle text="내용" />
      <TextareaWrapper>
        <Textarea
          value={diary}
          onChange={(e) => setDiary(e.target.value)}
          placeholder="내용을 입력하세요."
        />
      </TextareaWrapper>
    </>
  );
};

export default DiaryContent;

const TextareaWrapper = styled.div`
  width: 100%;
  padding: 10px 0 20px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 32px);
  height: 168px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
  border: 0;
  resize: none;
  background-color: ${({ theme }) => theme.palette.warm_gray_1};
`;
