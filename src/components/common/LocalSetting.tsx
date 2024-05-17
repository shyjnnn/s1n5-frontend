import Image from 'next/image';
import styled from 'styled-components';

import ContentTitle from './ContentTitle';

interface Props {
  title: boolean;
  local: string;
  setLocal: (value: string) => void;
}

const LocalSetting = (props: Props) => {
  const { title, local, setLocal } = props;

  return (
    <Wrapper>
      {title && <ContentTitle text="지역 설정" />}
      <SelectLocalBox>
        <LocalButton
          className={local === '제주' ? 'selected' : 'default'}
          onClick={() => setLocal('제주')}
        >
          <Image
            src="./svg/local-icon.svg"
            width={24}
            height={24}
            alt="local"
          />
          제주
        </LocalButton>
        <LocalButton
          className={local === '부산' ? 'selected' : 'default'}
          onClick={() => setLocal('부산')}
        >
          <Image
            src="./svg/local-icon.svg"
            width={24}
            height={24}
            alt="local"
          />
          부산
        </LocalButton>
        <LocalButton
          className={local === '평양' ? 'selected' : 'default'}
          onClick={() => setLocal('평양')}
        >
          <Image
            src="./svg/local-icon.svg"
            width={24}
            height={24}
            alt="local"
          />
          평양
        </LocalButton>
        <LocalButton
          className={local === '광주' ? 'selected' : 'default'}
          onClick={() => setLocal('광주')}
        >
          <Image
            src="./svg/local-icon.svg"
            width={24}
            height={24}
            alt="local"
          />
          광주
        </LocalButton>
      </SelectLocalBox>
    </Wrapper>
  );
};

export default LocalSetting;

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const SelectLocalBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0 20px;
`;

const LocalButton = styled.div`
  width: 59px;
  height: 20px;
  padding: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &.default {
    background-color: ${({ theme }) => theme.palette.warm_gray_1};
    color: ${({ theme }) => theme.palette.brown_1};
  }

  &.selected {
    background-color: ${({ theme }) => theme.palette.brown_1};
    color: ${({ theme }) => theme.palette.white};
  }
`;
