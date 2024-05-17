import styled from 'styled-components';

import ContentTitle from '../common/ContentTitle';

interface Props {
  title: string;
  setTitle: (value: string) => void;
}

const DiaryTitle = (props: Props) => {
  const { title, setTitle } = props;
  return (
    <>
      <ContentTitle text="일기 제목" />
      <InputWrapper>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="일기 제목을 입력하세요."
        />
      </InputWrapper>
    </>
  );
};

export default DiaryTitle;

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 0 20px;
`;

const Input = styled.input`
  width: calc(100% - 32px);
  height: 22px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.palette.warm_gray_1};
`;
