import React, { FC } from 'react';
import styles from './field.module.scss';
import { FieldItem } from '@/features/Maze/ui/FieldItem';
import { numberToCoords } from '@/features/Maze/lib/utils/numberToCoords';
import { Coords } from '@/features/Maze/types/Coords';
import { GameStatuses } from '@/features/Maze/types/Enums';

interface Props {
  fields: Array<string>;
  status: GameStatuses;
  selectHandler: (cell: Coords) => void;
  answer?: Coords;
  fieldSize: number;
  startPos?: Coords;
}

export const Field: FC<Props> = (props) => {
  const { selectHandler } = props;

  const selectCell = (index: number) => {
    selectHandler(numberToCoords(index + 1, props.fieldSize));
  };

  return (
    <div className={styles.body} style={{
      '--columns': props.fieldSize,
    } as React.CSSProperties}
    >
      {props.fields.map((el, index) => (
        <FieldItem key={index}
                   selectHandler={() => selectCell(index)}
                   cell={numberToCoords(index + 1, props.fieldSize)}
                   showWin={props.status === GameStatuses.WIN}
                   showLose={props.status === GameStatuses.LOSE}
                   startPos={props.startPos}
                   answer={props.answer} />
      ))}
    </div>
  );
};
