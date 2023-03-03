import { Coords } from '@/features/Maze/types/Coords';
import { Step } from '@/features/Maze/types/Step';

type Argument = Coords | Step

export const isSameCoords = (fistCoords?: Argument, secondCoords?: Argument) => {
  return fistCoords?.x === secondCoords?.x && fistCoords?.y === secondCoords?.y;
};
