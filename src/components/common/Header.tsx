/* eslint-disable react/require-default-props */
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  leftIcon: 'logo' | 'backspace';
  title?: string;
  rightIcon?: 'setting' | 'share';
  rightOnClick?: () => void;
}

const Header = (props: Props) => {
  const router = useRouter();
  const { leftIcon, title, rightIcon, rightOnClick } = props;

  return (
    <Wrapper>
      {leftIcon === 'logo' ? (
        <Image
          src="./svg/backspace-icon.svg"
          width={24}
          height={24}
          alt="backspace"
        />
      ) : (
        <Image
          src="./svg/backspace-icon.svg"
          width={24}
          height={24}
          alt="backspace"
          onClick={() => router.back()}
        />
      )}
      <div className="title">{title ?? ''}</div>
      {rightIcon === 'setting' && (
        <Image
          className="right"
          src="./svg/setting-icon.svg"
          width={24}
          height={24}
          alt="setting"
          onClick={rightOnClick}
        />
      )}
      {rightIcon === 'share' && (
        <Image
          className="right"
          src="./svg/share-icon.svg"
          width={24}
          height={24}
          alt="share"
          onClick={rightOnClick}
        />
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 88px;

  .title {
    font-size: 20px;
    font-weight: 700;
    color: #1f1f1f;
    text-align: center;
  }

  .right {
    justify-self: end;
  }
`;
