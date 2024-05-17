import styled from 'styled-components';

interface Props {
  text: string;
  state: 'disabled' | 'activated';
  onClick: () => void;
}

const BottomBtn = (props: Props) => {
  const { text, state, onClick } = props;

  return (
    <Button onClick={onClick} className={state}>
      {text}
    </Button>
  );
};

export default BottomBtn;

const Button = styled.button`
  width: calc(100% - 32px);
  height: 50px;
  border-radius: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  bottom: 20px;

  &.disabled {
    color: #ffffff;
    border: 0;
    background-color: ${({ theme }) => theme.palette.brown_2};
  }

  &.activated {
    color: #ffffff;
    border: 0;
    background-color: ${({ theme }) => theme.palette.brown_1};
  }
`;
