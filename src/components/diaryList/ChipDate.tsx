import styled from 'styled-components';

import TagChip from '../common/TagChip';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Date = styled.div`
  color: #8e8e93;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function ChipDate({ text, date }: { text: string; date: string }) {
  return (
    <Container>
      <TagChip text={text} />
      <Date>{date}</Date>
    </Container>
  );
}

export default ChipDate;
