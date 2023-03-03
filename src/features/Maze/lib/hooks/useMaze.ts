import { useState } from 'react';
import { Step } from '@/features/Maze/types/Step';
import { Coords } from '@/features/Maze/types/Coords';
import { isSameCoords } from '@/features/Maze/lib/utils/isSameCoords';
import { generatePath } from '@/features/Maze/lib/utils/generatePath';
import { generateStartCoords } from '@/features/Maze/lib/utils/generateStartCoords';
import { GameStatuses } from '@/features/Maze/types/Enums';

export const useMaze = () => {
  const [stepsPath, setStepsPath] = useState<Step[]>([]);
  const [startPos, setStartPos] = useState<Coords>();
  const [answer, setAnswer] = useState<Coords>();
  const [status, setStatus] = useState<GameStatuses>(GameStatuses.IDLE);
  const [fieldSize, setFieldSize] = useState<number>(2);
  const [stepsCount, setStepsCount] = useState<number>(1);

  const startGame = () => {
    const startPosition = generateStartCoords(fieldSize);
    setStatus(GameStatuses.PLAYING);
    setFieldSize(fieldSize);
    setStartPos(startPosition);
    setStepsPath(generatePath(stepsCount, fieldSize, startPosition));
  };

  const handleAnswer = (cell: Coords) => {
    setAnswer(cell);

    const trueAnswer = stepsPath.at(-1)!;

    if (isSameCoords(cell, trueAnswer)) {
      setStatus(GameStatuses.WIN);
    } else {
      setStatus(GameStatuses.LOSE);
    }
  };

  const restartGame = () => {
    setStatus(GameStatuses.IDLE);
    setAnswer(undefined);
  };


  return {
    stepsPath,
    startPos,
    status,
    answer,
    fieldSize,
    stepsCount,
    startGame,
    handleAnswer,
    setFieldSize,
    setStepsCount,
    restartGame
  };
};
