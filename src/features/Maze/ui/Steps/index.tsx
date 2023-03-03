import React, { FC } from 'react';
import styles from './steps.module.scss';
import { Step } from '@/features/Maze/types/Step';
import Image from 'next/image';

interface Props {
  stepsList?: Step[];
}

export const Steps: FC<Props> = (props) => {

  return (
    <div className={styles.body}>
      {props.stepsList?.map((el, index) => (
        <div key={index} className={styles[el.direction]}>
          <Image src={'/maze/icons/direction.svg'} width={150} height={150} alt={'Direction'} />
        </div>
      ))}
    </div>
  );
};
