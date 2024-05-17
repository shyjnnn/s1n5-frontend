/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from 'styled-components';

const ContentWrap = styled.div`
  color: var(--brown-1, #555151);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  padding: 10px 0;
`;

const ImageWrap = styled.img`
  width: 343px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 8px;
`;
const Content = ({ text, img }: { text: string; img: string }) => {
  return (
    <>
      <ContentWrap>{text}</ContentWrap>
      <ImageWrap src={img} alt="diary image" />
    </>
  );
};

export default Content;
