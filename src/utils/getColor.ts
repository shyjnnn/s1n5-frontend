// eslint-disable-next-line import/no-named-as-default
import colorPalette from '@/constant/colorPalatte';

const getColor = (
  text: keyof typeof colorPalette | string,
  type: 'color' | 'background',
) => {
  const colorInfo = colorPalette[text as keyof typeof colorPalette];
  // eslint-disable-next-line no-nested-ternary
  return colorInfo ? colorInfo[type] : type === 'color' ? '#FFFFFF' : '#000000';
};

export default getColor;
