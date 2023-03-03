import { Coords } from '@/features/Maze/types/Coords';

export interface Step extends Coords{
  direction: string;
}
