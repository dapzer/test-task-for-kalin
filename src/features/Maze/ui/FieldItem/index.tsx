import React, { FC } from 'react';
import styles from './field-item.module.scss';
import Image from 'next/image';
import { Coords } from '@/features/Maze/types/Coords';
import { isSameCoords } from '@/features/Maze/lib/utils/isSameCoords';

interface Props {
  showWin: boolean;
  showLose: boolean;
  selectHandler: () => void;
  cell: Coords;
  answer?: Coords;
  startPos?: Coords;
}

export const FieldItem: FC<Props> = (props) => {
  const { selectHandler } = props;

  const isSelected = isSameCoords(props.answer, props.cell);
  const isStart = isSameCoords(props.startPos, props.cell);

  return (
    <button className={styles.body} onClick={selectHandler} disabled={!!props.answer}>
      {props.showWin && isSelected && (
        <div className={styles.win}>
          <Image src='/maze/icons/win.svg' width={90} height={90} alt='Win' />
        </div>
      )}

      {props.showLose && isSelected && (
        <div className={styles.lose}>
          <Image src='/maze/icons/lose.svg' width={90} height={90} alt='Lose' />
        </div>
      )}

      {isStart && !isSelected && (
        <div>
          <Image src='/maze/icons/start.svg' width={90} height={90} alt='Lose' />
        </div>
      )}
    </button>
  );
};
