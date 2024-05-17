import Image from 'next/image';
import styled from 'styled-components';

import ContentTitle from './ContentTitle';

interface Props {
  total: boolean;
  title: boolean;
  local: string;
  setLocal: (value: string) => void;
}

const LocalSetting = (props: Props) => {
  const { total, title, local, setLocal } = props;

  return (
    <Wrapper>
      {title && <ContentTitle text="지역 설정" />}
      <SelectLocalBox className={total ? 'withTotal' : 'withoutTotal'}>
        {total && (
          <TotalButton
            className={local === '전체' ? 'selected' : 'default'}
            onClick={() => setLocal('전체')}
          >
            전체
          </TotalButton>
        )}
        <LocalButton
          className={local === '제주' ? 'selected' : 'default'}
          onClick={() => setLocal('제주')}
        >
          <Image src="./svg/jeju-icon.svg" width={24} height={24} alt="local" />
          제주
        </LocalButton>
        <LocalButton
          className={local === '부산' ? 'selected' : 'default'}
          onClick={() => setLocal('부산')}
        >
          <Image
            src="./svg/busan-icon.svg"
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
            src="./svg/pyongyang-icon.svg"
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
            src="./svg/gwangju-icon.svg"
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
  margin: 10px 0;

  &.withTotal {
    overflow-x: scroll;
  }

  &.withoutTotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  :last-child {
    margin: 0;
  }
`;

const TotalButton = styled.div`
  min-width: 25px;
  height: 20px;
  padding: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 9px;

  &.default {
    background-color: ${({ theme }) => theme.palette.warm_gray_1};
    color: ${({ theme }) => theme.palette.brown_1};
  }

  &.selected {
    background-color: ${({ theme }) => theme.palette.brown_1};
    color: ${({ theme }) => theme.palette.white};
  }
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
  margin-right: 9px;

  &.default {
    background-color: ${({ theme }) => theme.palette.warm_gray_1};
    color: ${({ theme }) => theme.palette.brown_1};
  }

  &.selected {
    background-color: ${({ theme }) => theme.palette.brown_1};
    color: ${({ theme }) => theme.palette.white};
  }
`;
