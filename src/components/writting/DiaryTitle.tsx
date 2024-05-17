import styled from 'styled-components';

import ContentTitle from '../common/ContentTitle';

const DiaryTitle = () => {
  return (
    <>
      <ContentTitle text="일기 제목" />
      <InputWrapper>
        <Input />
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
