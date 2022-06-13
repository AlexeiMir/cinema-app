import React, { FC } from 'react';
import { MoviesContainer } from './MoviesContainer';
import { Search } from './Search';
import styles from './styles.module.scss';

const Sidebar: FC = () => (
  <div className={styles.sidebar__container}>
    <Search />
    <MoviesContainer />
  </div>
);

export { Sidebar };