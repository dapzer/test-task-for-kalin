import { Coords } from '@/features/Maze/types/Coords';
import { Step } from '@/features/Maze/types/Step';
import { getRandomNumber } from '@/utils/getRandomNumber';

const moveDirections: Step[] = [
  { direction: 'left', x: -1, y: 0 },
  { direction: 'right', x: 1, y: 0 },
  { direction: 'top', x: 0, y: 1 },
  { direction: 'bottom', x: 0, y: -1 },
];

export const generatePath = (count: number, size: number, startPos: Coords) => {
  const result: Step[] = [];

  for (let i = 0; i < count; i++) {
    while (true) {
      const direction = moveDirections[getRandomNumber(moveDirections.length) - 1];
      if (!result.length) {
        const newX = startPos!.x + direction.x;
        const newY = startPos!.y + direction.y;

        if (newX > 0 && newX <= size && newY > 0 && newY <= size) {
          result.push({
            direction: direction.direction,
            x: newX,
            y: newY,
          });
          break;
        }
      } else {
        const newX = result[i - 1].x + direction.x;
        const newY = result[i - 1].y + direction.y;

        if (newX > 0 && newX <= size && newY > 0 && newY <= size) {
          result.push({
            direction: direction.direction,
            x: newX,
            y: newY,
          });
          break;
        }
        continue
      }
    }
  }

  return result;
};
