import { getRandomNumber } from '@/utils/getRandomNumber';

export const generateStartCoords = (size: number) => {
  const x = getRandomNumber(size);
  const y = getRandomNumber(size);

  return {
    x, y,
  };
};
