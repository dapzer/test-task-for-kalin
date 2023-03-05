import { Coords } from '@/features/Maze/types/Coords';
import { Step } from '@/features/Maze/types/Step';
import { getRandomNumber } from '@/utils/getRandomNumber';

const moveDirections: Step[] = [
  { direction: 'left', x: -1, y: 0 },
  { direction: 'right', x: 1, y: 0 },
  { direction: 'top', x: 0, y: -1 },
  { direction: 'bottom', x: 0, y: 1 },
];

const isOutOfField = (fistCoords?: Coords, secondCoords?: Coords) => {
  return fistCoords?.x === secondCoords?.x || fistCoords?.y === secondCoords?.y;
};

export const generatePath = (count: number, size: number, startPos: Coords) => {
  const result: Step[] = [startPos as Step];
  const minCoords = { x: 0, y: 0 };
  const maxCoords = { x: size + 1, y: size + 1 };

  for (let i = 0; i < count; i++) {
    while (true) {
      const direction = moveDirections[getRandomNumber(moveDirections.length) - 1];
      const lastCoords = result.at(-1)!

      const newCoords = {
        x: lastCoords.x + direction.x,
        y: lastCoords.y + direction.y,
      };

      if (!isOutOfField(minCoords, newCoords) && !isOutOfField(maxCoords, newCoords)) {
        result[i] = {
          direction: direction.direction,
          ...newCoords,
        };

        break;
      }
    }
  }

  return result;
};
