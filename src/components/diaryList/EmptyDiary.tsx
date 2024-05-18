import styled from 'styled-components';

const ImgWrap = styled.img`
  width: 260px;
  height: 260px;
  flex-shrink: 0;
  margin-top: 151px;
`;

const EmptyText = styled.div`
  color: var(--brown-1, #555151);
  text-align: center;

  /* Body1_16_Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

const EmptyDiary = () => {
  return (
    <>
      <ImgWrap src="./png/empty-diary.png" />
      <EmptyText>아직 등록된 일기가 없어요.일기를 추가해보세요.</EmptyText>
    </>
  );
};

export default EmptyDiary;
