import styled from 'styled-components';

const MainLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.palette.background};
  // height: 852px;
  min-height: 852px;
`;

export default MainLayout;
