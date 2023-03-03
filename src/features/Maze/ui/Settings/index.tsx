import React, { FC } from 'react';
import styles from "./settings.module.scss"

interface Props {
  fieldSize: number;
  setFieldSize: (n: number) => void;
  stepsCount: number;
  setStepsCount: (n: number) => void;
}

export const Settings: FC<Props> = (props) => {
  const { setFieldSize, setStepsCount } = props;

  return (
    <div className={styles.body}>
      <div className={styles.block}>
        <label htmlFor='fieldSize'>Размер игрового поля: {props.fieldSize}</label>
        <input id='fieldSize' type='range' min="2" max="10" value={props.fieldSize} step={1}
               onChange={(event) => setFieldSize(Number(event.target.value))} />
      </div>
      <div className={styles.block}>
        <label htmlFor='stepsCount'>Количество шагов: {props.stepsCount}</label>
        <input id='stepsCount' type='range' min="1" max="10" value={props.stepsCount} step={1}
               onChange={(event) => setStepsCount(Number(event.target.value))} />
      </div>
    </div>
  );
};
