import styled from 'styled-components';

const Wrapper = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  box-shadow: 0px 8px 20px 0px rgba(85, 81, 81, 0.35);
  background-color: #555151;
  border-radius: 56px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CreateBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper>
      <Img src="./svg/pencil.svg" onClick={onClick} />
    </Wrapper>
  );
};

export default CreateBtn;
