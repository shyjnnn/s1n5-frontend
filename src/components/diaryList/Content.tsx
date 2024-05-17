import Image from 'next/image';
import styled from 'styled-components';

const ContentWrap = styled.div`
  color: var(--brown-1, #555151);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

const ImageWrap = styled.div`
  width: 343px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 8px;
`;
const Content = ({ text, img }: { text: string; img: string }) => {
  return (
    <>
      <ContentWrap>{text}</ContentWrap>
      <ImageWrap>
        <Image src={img} alt="diary image" width={343} height={240} />
      </ImageWrap>
    </>
  );
};

export default Content;
