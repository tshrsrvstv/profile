import React, { FC } from 'react';
import styles from './Title.module.css';

interface TitleProps {}

const Title: FC<TitleProps> = () => (
  <div className={styles.Title}>
    Tushar Srivastava
  </div>
);

export default Title;
