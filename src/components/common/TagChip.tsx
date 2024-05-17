import styled from 'styled-components';

// eslint-disable-next-line import/no-named-as-default
import colorPalette from '@/constant/colorPalatte';
import getColor from '@/utils/getColor';

const Container = styled.div<{ text: keyof typeof colorPalette | string }>`
  background-color: ${({ text }) => getColor(text, 'background')};
  color: ${({ text }) => getColor(text, 'color')};
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
`;

function TagChip({ text }: { text: string }) {
  return <Container text={text}>{text}</Container>;
}

export default TagChip;
