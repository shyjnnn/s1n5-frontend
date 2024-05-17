import styled from 'styled-components';

const Container = styled.h1`
  color: var(--brown-1, #555151);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Title = ({ title }: { title: string }) => {
  return <Container>{title}</Container>;
};

export default Title;
