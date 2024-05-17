/* eslint-disable react/require-default-props */
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  text: string;
  hiddenPoint?: boolean;
}

const ContentTitle = (props: Props) => {
  const { text, hiddenPoint } = props;

  return (
    <Wrapper>
      <Title>{text}</Title>
      {!hiddenPoint && (
        <Image
          className="red-point"
          src="./svg/red-point-icon.svg"
          width={4}
          height={4}
          alt="red"
        />
      )}
    </Wrapper>
  );
};

export default ContentTitle;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 10px 0;
  height: 21px;

  .red-point {
    margin-left: 8px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown_1};
`;
