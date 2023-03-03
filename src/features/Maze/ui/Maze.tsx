import React from 'react';
import { useMaze } from '@/features/Maze/lib/hooks/useMaze';
import { Field } from '@/features/Maze/ui/Field';
import { GameStatuses } from '@/features/Maze/types/Enums';
import { Settings } from '@/features/Maze/ui/Settings';
import { Steps } from '@/features/Maze/ui/Steps';

export const Maze = () => {
  const {
    stepsPath,
    startPos,
    status,
    answer,
    fieldSize,
    stepsCount,
    setFieldSize,
    setStepsCount,
    startGame,
    handleAnswer,
    restartGame,
  } = useMaze();

  return (
    <div>
      {status === GameStatuses.IDLE && (
        <Settings fieldSize={fieldSize}
                  setFieldSize={setFieldSize}
                  stepsCount={stepsCount}
                  setStepsCount={setStepsCount}
        />
      )}

      {status !== GameStatuses.IDLE && fieldSize &&
        <>
          <Field key={status}
                 fields={Array(fieldSize * fieldSize).fill('_')}
                 startPos={startPos}
                 selectHandler={handleAnswer}
                 answer={answer}
                 fieldSize={fieldSize}
                 status={status}
          />
          <Steps stepsList={stepsPath} />
        </>
      }

      {status === GameStatuses.IDLE && (
        <button onClick={() => startGame()}>Начать игру</button>
      )}

      {status !== GameStatuses.IDLE && status !== GameStatuses.PLAYING && (
        <button onClick={() => restartGame()}>Перезапустить игру</button>
      )}
    </div>
  );
};
